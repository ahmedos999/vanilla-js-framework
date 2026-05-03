export class MenuPage extends HTMLElement {
    constructor(){
       super() 

       this.root = this.attachShadow({mode: "open"})
       const style = document.createElement('style')

       this.root.appendChild(style)

       async function loadCSS(params) {
        const req  =  await fetch('/components/MenuPage.css')
        const content  = await req.text();
        style.textContent = content
       }

       loadCSS()
    }


    connectedCallback(){

        const template =  document.getElementById("menu-page-template")
        const content  = template.content.cloneNode(true)

        this.root.appendChild(content)

        window.addEventListener("appmenuchange",()=>{
            this.render()
        })
        this.render()
    }

    render(){

        if(app.store.menu){
            this.root.querySelector("#menu").innerHTML = ""

            for (let category of app.store.menu){
                const catogoryLi = document.createElement("li")

                catogoryLi.innerHTML = `
                <h3>${category.name}</h3>
                    <ul class='category'>                    
                    </ul>
                `

                this.root.querySelector("#menu").appendChild(catogoryLi)

                category.products.forEach(product => {
                    const item = document.createElement('product-item')
                    item.dataset.product = JSON.stringify(product)
                    catogoryLi.querySelector("ul").appendChild(item)

                });
            }
        }else{
            this.root.querySelector("#menu").innerHTML = "Loading..."
        }
    }


}

customElements.define("menu-page", MenuPage);