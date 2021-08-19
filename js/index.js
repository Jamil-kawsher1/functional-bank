const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordfield = document.getElementById('user-password');
    const userPassword = passwordfield.value;
    // console.log(userPassword);
    if (userEmail == "badhon0777@gmail.com" && userPassword == "admin123") {
        const eMessage = document.getElementById("error");
        eMessage.innerText = "Success!!!"
        eMessage.style.color = 'green';
        window.location.href = 'banking.html';

    }
    else {
        const eMessage = document.getElementById("error");
        eMessage.innerText = "Something went Wrong Please checK email and password"
        eMessage.style.color = 'red';
    }


})