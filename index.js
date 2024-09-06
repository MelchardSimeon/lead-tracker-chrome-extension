
let myLeads = [];
let inputEl = document.getElementById("input-el")
let inputValue = inputEl.value
let inputButton = document.querySelector("#input-btn").addEventListener("click", saveInput)

function saveInput() {
    inputValue = inputEl.value
    myLeads.push(inputValue)
    console.log(myLeads)
    inputEl.value = ""
}
