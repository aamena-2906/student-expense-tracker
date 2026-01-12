let total = 0;

function addExpense() {
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;

    if (title === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    amount = Number(amount);
    total += amount;

    let li = document.createElement("li");
    li.innerHTML = `${title} - ₹${amount}`;

    document.getElementById("expenseList").appendChild(li);
    document.getElementById("total").innerText = total;

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}
