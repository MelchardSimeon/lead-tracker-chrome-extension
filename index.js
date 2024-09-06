
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.comz"];
let inputEl = document.getElementById("input-el")
let inputButton = document.querySelector("#input-btn").addEventListener("click", saveInput)
let ul = document.getElementById("ul")

console.log(inputValue)

function saveInput() {
    let inputValue = inputEl.value
    myLeads.push(inputValue)
    console.log(myLeads)
    inputValue = ""

    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li")
        li.textContent += myLeads[i]    
        ul.appendChild(li)
    }
    inputEl.value = ""  
}

