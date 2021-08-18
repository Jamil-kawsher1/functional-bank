var balance = 0;

function getInputValue() {
    //geting all info of dposit input field on variable inputValueDesposit
    const inputValueDeposit = document.getElementById("addMoney");
    //geting user inputed value from deposit input field and converted it to float
    const inputValueDepositFloat = parseFloat(inputValueDeposit.value);
    //clearing input value filed of deposit ammount
    inputValueDeposit.value = "";
    return inputValueDepositFloat;




}





//Deposit Section
//add event listener and display given value to deposit section
const depositBtn = document.getElementById("addMoneyBtn").addEventListener("click", function () {


    const inputValueDepositFloat = getInputValue();


    //holding and seting display value of deposit
    const dipositDisplay = document.getElementById("depositField");


    //initial deposit
    const iniDeposit = document.getElementById("depositField");
    const iniDepositFloat = parseFloat(iniDeposit.innerText);
    const finalDeposit = inputValueDepositFloat + iniDepositFloat;

    dipositDisplay.innerText = finalDeposit.toFixed(2);


    // balance part
    //holdin and getting info of balaceDasboard filed in initialBalance variable
    const initialBalance = document.getElementById("balaceDashboard");
    //converting the Initial value to float 
    const initialBalanceFloat = parseFloat(initialBalance.innerText);
    //linking up balace with deposit
    const totalBalance = initialBalanceFloat + inputValueDepositFloat;
    initialBalance.innerText = totalBalance.toFixed(2);
    balance = totalBalance;

})

//widthdrawal part
const moneyOutBtn = document.getElementById("moneyOutBtn").addEventListener("click", function () {

    //setting display and update widthdrwal dashboard
    //geting input value from user 
    const moneyOut = document.getElementById("moneyOut");
    const userInputedvalue = moneyOut.value;
    moneyOut.value = "";
    //conver to float
    const userInputedvalueFloat = parseFloat(userInputedvalue);
    //geting currnet balance of widthdrwal dashboard
    const widthdrawField = document.getElementById("widthdrawField");
    const widthdrawalFiledInnervalue = parseFloat(widthdrawField.innerText);
    const finalWidthdrawal = userInputedvalueFloat + widthdrawalFiledInnervalue;
    widthdrawField.innerText = finalWidthdrawal;

    //getting inner value of blance filed from display
    const balaceDashboard = document.getElementById("balaceDashboard");
    const balaceDasboardInner = balaceDashboard.innerText;
    const balaceDasboardInnerFloat = parseFloat(balaceDasboardInner);
    const finalDashboardBoardBalance = balaceDasboardInnerFloat - userInputedvalueFloat;
    balaceDashboard.innerText = finalDashboardBoardBalance.toFixed(2);

})







