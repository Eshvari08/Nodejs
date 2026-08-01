function checkBalance(accountNumber) {
    return "Balance for account " + accountNumber + " is ₹10,000";
}

console.log(checkBalance("abc22"));

function  withdrawMoney (accountNumber, amount) {
    return "₹" + amount + " withdrawn from account " + accountNumber;
};

console.log(withdrawMoney("abc22",5000));

function transferFunds(fromAccount, toAccount, amount) {
    return "Transferred ₹" + amount;
}

transferFunds("ACC1", "ACC2", 1000);
   console.log(transferFunds("acc1","acc2",100));

function  depositMoney (accountNumber, amount) {
    return "₹" + amount + " deposting into account " + accountNumber;
};

console.log(depositMoney(12333,8877));