const date_el = document.getElementById("date")
const expenses = document.getElementById("expenses")
const amount = document.getElementById("amount")
const button = document.getElementById("addExpense")
button.addEventListener("click",addExpenses)

function addExpenses() {
    const table = document.getElementById("table")
    const row = document.createElement("tr")
    table.appendChild(row)
    const expensetd =row.insertCell(0)
    const datetd =row.insertCell(1)
    const amounttd =row.insertCell(2)
    expensetd.innerText = expenses.value
    datetd.innerText = date_el.value
    amounttd.innerText = amount.value
    amount.value = ""
    expenses.value = ""
    date_el.value=""
}


