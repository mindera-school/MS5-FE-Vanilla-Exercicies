const button = document.getElementById("subBtn");
const input = document.getElementById("multiplierInput");
const form = document.getElementById("multiplierForm");
const table = document.getElementById("tabuadaTable") 

let number = "";

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

button.addEventListener("click",()=>{
    number = input.value; 
    table.innerHTML = "";
    const defTr= document.createElement("tr");
    const defTh1 = document.createElement("th");
    const defTh2 = document.createElement("th");
    const defTh3 = document.createElement("th");
    defTh1.innerHTML = "Multiplicador";
    defTh2.innerHTML = "Multiplicando";
    defTh3.innerHTML = "Resultado"

    for (let i = 0; i < 11; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = number;
        const td2 = document.createElement("td");
        td2.innerHTML = i;
        const result = document.createElement("td");
        result.innerHTML = number * i;
        table.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(result);
    }
});

