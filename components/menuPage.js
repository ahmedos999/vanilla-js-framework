class MenuPage extends HTMLElement {
    constructor(){
       super() 

       this.root = this.attachShadow({mode: "open"})
       const style = document.createElement('style')

       this.root.appendChild(style)

       async function loadCSS(params) {
        const req  =  fetch('/components/MenuPage.css')
        const content  = await req.text();
        style.textContent = content
       }

       loadCSS()
    }


    connectedCallBack(){
        const template =  document.getElementById("menu-page-template")
        const content  = template.content.cloneNode(true)

        this.root.appendChild(content)
    }


}