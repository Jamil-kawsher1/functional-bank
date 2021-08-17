var depositG = 0;

//Deposit Section
//add event listener and display given value to deposit section
const depositBtn = document.getElementById("addMoneyBtn").addEventListener("click", function () {
    //geting all info of dposit input field on variable inputValueDesposit
    const inputValueDeposit = document.getElementById("addMoney");
    //geting user inputed value from deposit input field and converted it to float
    const inputValueDepositFloat = parseFloat(inputValueDeposit.value);
    //holding the user inputed value for deposit to use it in balance section
    depositG = inputValueDepositFloat;
    //holding and seting display value of deposit
    const dipositDisplay = document.getElementById("depositField");


    //initial deposit
    const iniDeposit = document.getElementById("depositField");
    const iniDepositFloat = parseFloat(iniDeposit.innerText);
    const finalDeposit = inputValueDepositFloat + iniDepositFloat;

    dipositDisplay.innerText = finalDeposit.toFixed(2);
    inputValueDeposit.value = "";

    // balance part
    //holdin and getting info of balaceDasboard filed in initialBalance variable
    const initialBalance = document.getElementById("balaceDashboard");
    //converting the Initial value to float 
    const initialBalanceFloat = parseFloat(initialBalance.innerText);
    //linking up balace with deposit
    const totalBalance = initialBalanceFloat + inputValueDepositFloat;
    initialBalance.innerText = totalBalance.toFixed(2);


})



