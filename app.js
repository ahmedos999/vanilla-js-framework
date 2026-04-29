import { loadData } from "./services/Menu.js"
import { Router } from "./services/router.js"
import store from "./services/store.js"

window.app = {}
app.router = Router
app.store = store


document.addEventListener("DOMContentLoaded",()=>{
    app.router.init()

    loadData();
})