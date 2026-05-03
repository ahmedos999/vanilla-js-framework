export const Router = {
    init: ()=>{
        const links = document.querySelectorAll("a.navlink")

        links.forEach((link)=>{
            link.addEventListener('click',(event)=>{
                event.preventDefault()

                Router.go(link.getAttribute("href"))
            })
        })
    },
    go: (url,addToHistory = true)=>{

        if(addToHistory){history.pushState({url},null,url)}

        let pageElement = null

        switch(url){
            case '/':pageElement = document.createElement("menu-page")
            break
            case '/order':pageElement = document.createElement("h2")
            break
            default: 
                if(url.startsWith("/product-")){
                    pageElement = document.createElement('h3')
                    const paramID  = url.substring(url.lastIndexOf("-")+1)
                    pageElement.dataset.productId = paramID
                }
        }

        if(pageElement){

            // Caching for easy accessiblity 
            const cache =  document.querySelector("main");

            // Reset & add new child
            cache.innerHTML = ""
            cache.appendChild(pageElement)

            // back to top of page
            window.scrollX = 0
            window.scrollY = 0

        }else{

        }
    },
    
}