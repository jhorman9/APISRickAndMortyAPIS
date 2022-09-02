const insert = document.querySelector(".insertHtml");
const btns = document.querySelector(".btns");

const API = "https://rickandmortyapi.com/api/character"

const getData = (ApiUrl) => {
    return fetch(ApiUrl)
    .then(response => response.json())
    .then(json =>{
        printData(json),
        allUsers(json.info)
        }
    )
    .catch(error => {console.log("Error", error);})
}

let html = "";

const printData = (data) =>{
    data.results.forEach(user => {
        html += `<div class="card">
        <div class="imagen">
            <img src="${user.image}" alt="${user.name}">
        </div>
        <div class="data-user">
            <h4>Name: ${user.name}</h4>
            <h4>Specie: ${user.species}</h4>
            <h4>Gender: ${user.gender}</h4>
            <h4> Status: ${user.status}</h4>
        </div>
    </div>`  
    });
    insert.innerHTML = html;
}

let datas = "";

const allUsers = (informacion) =>{

    let html = `<div class="prev ${preDisable}" onclick="getData('${informacion.prev}')">PREV</div>`;
    html += `<div class="next ${nextDisable}" onclick="getData('${informacion.next}')">NEXT</div>`;
    btns.innerHTML = html;
}

getData(API)