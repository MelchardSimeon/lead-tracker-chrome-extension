
let myLeads = [];
let inputEl = document.getElementById("input-el")
let inputButton = document.querySelector("#input-btn")
let ul = document.getElementById("ul")

inputButton.addEventListener("click", saveInput)
inputButton.addEventListener("enter", saveInput)

function saveInput() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderValue()
}

function renderValue() {
    ul.innerHTML = ""
    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = myLeads[i];
        a.target = "_blank"
        a.textContent = myLeads[i];   
        li.appendChild(a)
        ul.appendChild(li)
    }
}       