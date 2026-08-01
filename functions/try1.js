function checkBalance(accountName) {
    return "Balance for " + accountName + " is ₹10,000";
}

console.log(checkBalance("Eshvari"));
console.log(checkBalance("Sanika"));


function withdrawMoney(accountName, amount) {
    return "₹" + amount + " withdrawn from " + accountName + "'s account";
}

console.log(withdrawMoney("Eshvari", 5000));


function transferFunds(fromAccount, toAccount, amount) {
    return "₹" + amount + " transferred from " + fromAccount + " to " + toAccount;
}

console.log(transferFunds("Eshvari", "Sanika", 1000));


function depositMoney(accountName, amount) {
    return "₹" + amount + " deposited into " + accountName + "'s account";
}

console.log(depositMoney("Sanika", 8000));

