import { loadData } from "./services/Menu.js"
import { Router } from "./services/router.js"
import store from "./services/store.js"

// Define webcomponent 
import {MenuPage} from "./components/menuPage.js"
import ProductItem from "./components/ProductItem.js"


window.app = {}
app.router = Router
app.store = store


document.addEventListener("DOMContentLoaded",()=>{
    app.router.init()

    loadData();
})