import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1"
const ID = 201;

function putData(urlApi, data) {
    const response = fetch(urlApi, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response;
}

 
const data = {
    "title": "YOU AREA A GOOD, PARKER",
    "price": 639
  }
  
putData(`${API}/products/${ID}`, data)
   .then((response) => response.json())
   .then((data) => console.log(data));