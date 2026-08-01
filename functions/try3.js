(function() {
    console.log("Banking system initialized securely");
})();
function withdrawMoney (accountNumber,amount){
    return "₹" + accountNumber + " the receipt " + amount;
}
let receipt = withdrawMoney(2000,"ACC123");
console.log(receipt);

let depositMoney = (accountNumber, amount) => {
    return "₹" + amount + " deposited into account " + accountNumber;
};
console.log(depositMoney(234,5000));

let getAccountStatus = acc => "Account " + acc + " is Active";
  console.log(getAccountStatus("ABC123"));

  function processTransaction() {

    function validateAccount() {
        console.log("Account validated");
    }

    validateAccount();
    console.log("Transaction processed");
}
processTransaction();