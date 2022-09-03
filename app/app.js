const insert = document.querySelector(".insertHtml");
const btns = document.querySelector(".btns");

const API = "https://rickandmortyapi.com/api/character"

const getData = (ApiUrl) => {
    return fetch(ApiUrl)
    .then(response => response.json())
    .then(json =>{
        printData(json),
        btnsPrevAndNext(json.info)
        }
    )
    .catch(error => {console.log("Error", error);})
}

const printData = (data) =>{
    let html = "";
    data.results.forEach(user => {
        html += `<div class="card">
        <div class="imagen">
            <img src="${user.image}" alt="Photo:  ${user.name}">
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

const btnsPrevAndNext = (informacion) =>{

    let html = `<div class="prev ${informacion.prev}" onclick="getData('${informacion.prev}')">PREV</div>`;
    html += `<div class="next ${informacion.next}" onclick="getData('${informacion.next}')">NEXT</div>`;
    btns.innerHTML = html;

    const prevDisplayNone = document.querySelector(".prev");
    const nextDisplayNone = document.querySelector(".next");

    if (prevDisplayNone.className.includes("null")) {
        prevDisplayNone.style.display = "none";
    }else if(nextDisplayNone.className.includes("null")) {
        nextDisplayNone.style.display = "none";
    }
}

getData(API)