import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1"
const ID = 201;

function deleteData(urlApi) {
    const response = fetch(urlApi, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

 


deleteData(`${API}/products/${ID}`)
    .then(console.log(`borrando ${ID}`))
    .finally(console.log("finally success"))
