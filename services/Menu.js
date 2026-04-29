import API from "./API.js";

export async function loadData() {
    app.store = await API.fetchMenu()
}