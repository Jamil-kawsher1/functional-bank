var balance = 0;

function getInputValue(value) {
    //geting all info of dposit input field on variable inputValueDesposit
    const inputValueDeposit = document.getElementById(value);
    //geting user inputed value from deposit input field and converted it to float
    const inputValueDepositFloat = parseFloat(inputValueDeposit.value);
    //clearing input value filed of deposit ammount
    inputValueDeposit.value = "";
    return inputValueDepositFloat;




}

function updateDepoWidth(fieldname, ammount) {
    const dipositDisplay = document.getElementById(fieldname);
    const iniDeposit = document.getElementById(fieldname);
    const iniDepositFloat = parseFloat(iniDeposit.innerText);
    const finalDeposit = ammount + iniDepositFloat;

    dipositDisplay.innerText = finalDeposit.toFixed(2);

}

function balanceUpdate(inputdepo, isTrue) {

    const initialBalance = document.getElementById("balaceDashboard");
    //converting the Initial value to float 
    const initialBalanceFloat = parseFloat(initialBalance.innerText);
    //linking up balace with deposit

    if (isTrue == true) {
        const totalBalance = initialBalanceFloat + inputdepo;
        initialBalance.innerText = totalBalance.toFixed(2);
        balance = totalBalance;
    }
    else {
        const totalBalance = initialBalanceFloat - inputdepo;
        initialBalance.innerText = totalBalance.toFixed(2);
        balance = totalBalance;


    }




}

//Deposit Section
//add event listener and display given value to deposit section
const depositBtn = document.getElementById("addMoneyBtn").addEventListener("click", function () {

    const inputdepo = getInputValue("addMoney");


    balanceUpdate(inputdepo, true);


})

//widthdrawal part
const moneyOutBtn = document.getElementById("moneyOutBtn").addEventListener("click", function () {


    //conver to float
    const userInputedvalueFloat = getInputValue("moneyOut")
    //geting currnet balance of widthdrwal dashboard
    updateDepoWidth("widthdrawField", userInputedvalueFloat);

    balanceUpdate(userInputedvalueFloat, false);



})







