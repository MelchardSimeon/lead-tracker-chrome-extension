
let myLeads = [];
let inputEl = document.getElementById("input-el")
let inputButton = document.querySelector("#input-btn")
let ul = document.getElementById("ul")

inputButton.addEventListener("click", saveInput)

function saveInput() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderValue()
}

function renderValue() {
    ul.innerHTML = ""
    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li")
        li.textContent = myLeads[i]
        ul.appendChild(li)
    }
}       