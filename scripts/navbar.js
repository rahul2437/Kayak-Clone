function switchToLogin() {
    document.querySelector(".login-div-homepage").classList.add("d-none");
    document.querySelector(".login-div-signin").classList.remove("d-none");
    document.querySelector(".login-div-signup").classList.add("d-none");
}
function backToHome() {
    document.querySelector(".login-div-homepage").classList.remove("d-none");
    document.querySelector(".login-div-signup").classList.add("d-none");
    document.querySelector(".login-div-signin").classList.add("d-none");
}
function switchToSignUp() {
    document.querySelector(".login-div-homepage").classList.add("d-none");
    document.querySelector(".login-div-signup").classList.remove("d-none");
    document.querySelector(".login-div-signin").classList.add("d-none");
}
async function userLogin(e) {
    e.preventDefault();
    let signInBtn = document.querySelector("#sign-in-btn");
    signInBtn.textContent = "Please wait..."
    let loginEmail = document.querySelector("#loginEmail");
    let loginPass = document.querySelector("#loginPass");
    if (loginEmail.value == "" || loginPass.value == "") {
        signInBtn.textContent = "All fields required...";
        setTimeout(() => {
            signInBtn.textContent = "Sign in";
        }, 1500)
        return;
    }
    let response = await fetch("https://kayaak-clone-backend.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify({
            email: `${loginEmail.value}`,
            password: `${loginPass.value}`
        }),
        headers: { "Content-Type": "application/json" }
    });
    let message = await response.json();
    console.log(message)
    if (message.status == "OK") {
        localStorage.setItem("loginStatus", JSON.stringify({
            isLogged: true,
            user_id: message.user_id,
            first_name: message.first_name,
            last_name: message.last_name,
            phone_num: message.phone_num,
            user_email: message.user_email
        }))
        signInBtn.textContent = "Login Successfull...";
        setTimeout(() => {
            location.reload();
        }, 1000)

    } else {
        signInBtn.textContent = "Invalid Credential...";
        loginEmail.textContent = "";
        loginPass.textContent = "";
        setTimeout(() => {
            signInBtn.textContent = "Sign in";
        }, 1500)
    }
}
async function userSignUp(e) {
    e.preventDefault();
    let signUpBtn = document.querySelector("#sign-up-btn");
    signUpBtn.textContent = "Please wait..."
    let fName = document.querySelector("#fName");
    let lName = document.querySelector("#lName");
    let phoneNumber = document.querySelector("#phoneNumber");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    if (fName.value == "" || lName.value == "" || phoneNumber.value == "" || email.value == "" || password.value == "") {
        signUpBtn.textContent = "All fields required...";
        setTimeout(() => {
            signUpBtn.textContent = "Sign up";
        }, 1500)
        return;
    }
    let response = await fetch("https://kayaak-clone-backend.herokuapp.com/user/signup", {
        method: "POST",
        body: JSON.stringify({
            first_name: `${fName.value}`,
            last_name: `${lName.value}`,
            email: `${email.value}`,
            password: `${password.value}`,
            phone_num: `${phoneNumber.value}`
        }),
        headers: { "Content-Type": "application/json" }
    });
    let message = await response.json();
    if (message.status == "OK") {
        localStorage.setItem("loginStatus", JSON.stringify({
            isLogged: true,
            user_id: message.user._id,
            first_name: message.user.first_name,
            last_name: message.user.last_name,
            phone_num: message.user.phone_num,
            user_email: message.user.email
        }));
        location.reload();
    } else if (message.status == "error" && message.details == "User Already Exists") {
        signUpBtn.textContent = "User Already Exists, Please Sign in";
        setTimeout(() => {
            signUpBtn.textContent = "Sign up";
            switchToLogin();
        }, 1200)
    } else {
        signUpBtn.textContent = "Failed Try Again...";
        setTimeout(() => {
            signUpBtn.textContent = "Sign up";
        }, 1500)
    }
}







var user_data = JSON.parse(localStorage.getItem("loginStatus"));


setTimeout(function () {
    if (user_data != null) check_if_logedin_navbar();

}, 300);

function check_if_logedin_navbar() {

    var status = user_data.isLogged;


    if (status === true) {
        let div_name = document.querySelector("#car_navbar_login_name");
        var div_button = document.querySelector("#car_navbar_login_button");
        div_name.style.width = "200px";

        div_button.setAttribute("class", "d-none");
        let image_arrow = document.createElement("img");
        image_arrow.src = "https://cdn.iconscout.com/icon/free/png-256/keyboard-down-arrow-1780093-1518654.png";
        image_arrow.setAttribute("class", "d-inline");
        image_arrow.style.width = "30%";
        image_arrow.style.float = "right";
        let p = document.createElement('p');
        p.innerText = user_data.first_name + " " + user_data.last_name;
        p.setAttribute("class", "d-inline");
        p.style.float = "right";
        p.style.padding = "2%";
        div_name.onclick = () => {
            let x = document.querySelector("#navbar_pop_up");
            if (x.className === "width-20 position-absolute d-block") {
                x.className = "d-none";

            }
            else {

                x.className = "width-20 position-absolute d-block";

            }
        }
        div_name.append(image_arrow, p);
    }
}
create_logout_dropdown();
function create_logout_dropdown() {

    let list_cont = document.createElement('div');
    list_cont.setAttribute("class", "list-group");
    let button_home = document.createElement('button');
    button_home.setAttribute("class", "list-group-item list-group-item-action");
    button_home.innerText = "Home";
    let button = document.createElement('button');
    button.setAttribute("class", "list-group-item list-group-item-action");
    button.innerText = "Logout";
    button.onclick = () => {
        var user_data = JSON.parse(localStorage.getItem("loginStatus"));
        user_data.isLogged = false;
        localStorage.setItem("loginStatus", JSON.stringify(user_data));


        location.reload();

    }
    list_cont.append(button_home, button);
    document.getElementById("navbar_pop_up").append(list_cont);

}
