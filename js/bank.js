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

function currentBalance() {
    const initialBalance = document.getElementById("balaceDashboard");
    //converting the Initial value to float 
    const initialBalanceFloat = parseFloat(initialBalance.innerText);
    return initialBalanceFloat;


}


function balanceUpdate(inputdepo, isTrue) {
    const initialBalance = document.getElementById("balaceDashboard");

    //linking up balace with deposit
    const initialBalanceFloat = currentBalance();
    console.log(initialBalanceFloat);
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
    if (inputdepo > 0) {
        updateDepoWidth("depositField", inputdepo);
        balanceUpdate(inputdepo, true);

    }



})

//widthdrawal part
const moneyOutBtn = document.getElementById("moneyOutBtn").addEventListener("click", function () {


    //conver to float
    const userInputedvalueFloat = getInputValue("moneyOut")
    //geting currnet balance of widthdrwal dashboard
    const currentDashboardbalance = currentBalance();
    if (userInputedvalueFloat > 0 && currentDashboardbalance > userInputedvalueFloat) {
        updateDepoWidth("widthdrawField", userInputedvalueFloat);

        balanceUpdate(userInputedvalueFloat, false);

    }
    if (currentDashboardbalance < userInputedvalueFloat) {
        alert("Please Inser a lower value!!Input Vale must be less then Current value!!!");
    }



})







