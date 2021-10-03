function switchToLogin(){
    document.querySelector(".login-div-homepage").classList.add("d-none");
    document.querySelector(".login-div-signin").classList.remove("d-none");
    document.querySelector(".login-div-signup").classList.add("d-none");
}
function backToHome(){
    document.querySelector(".login-div-homepage").classList.remove("d-none");
    document.querySelector(".login-div-signup").classList.add("d-none");
    document.querySelector(".login-div-signin").classList.add("d-none");
}
function switchToSignUp(){
    document.querySelector(".login-div-homepage").classList.add("d-none");
    document.querySelector(".login-div-signup").classList.remove("d-none");
    document.querySelector(".login-div-signin").classList.add("d-none");
}
async function userLogin(e){
    e.preventDefault();
    let signInBtn = document.querySelector("#sign-in-btn");
    signInBtn.textContent = "Please wait..."
    let loginEmail = document.querySelector("#loginEmail");
    let loginPass = document.querySelector("#loginPass");
    if(loginEmail.value=="" || loginPass.value==""){
        signInBtn.textContent = "All fields required...";
        setTimeout(()=>{
            signInBtn.textContent = "Sign in";
        },1500)
        return;
    }
    let response = await fetch("https://kayaak-clone-backend.herokuapp.com/user/login",{
        method: "POST",
        body: JSON.stringify({
            email: `${loginEmail.value}`,
            password:`${loginPass.value}`
        }),
        headers:{"Content-Type": "application/json"}
    });
    let message = await response.json();
    console.log(message)
    if(message.status=="OK"){
        localStorage.setItem("loginStatus",JSON.stringify({
            isLogged:true,
            user_id:message.user_id,
            first_name:message.first_name,
            last_name: message.last_name,
            phone_num: message.phone_num,
            user_email: message.user_email
        }))
        signInBtn.textContent = "Login Successfull...";
        setTimeout(()=>{
            location.reload(); 
        },1000)
        
    }else{
        signInBtn.textContent = "Invalid Credential...";
        loginEmail.textContent = "";
        loginPass.textContent = "";
        setTimeout(()=>{
            signInBtn.textContent = "Sign in";
        },1500)
    }
}
async function userSignUp(e){
    e.preventDefault();
    let signUpBtn = document.querySelector("#sign-up-btn");
    signUpBtn.textContent = "Please wait..."
    let fName = document.querySelector("#fName");
    let lName = document.querySelector("#lName");
    let phoneNumber = document.querySelector("#phoneNumber");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    if(fName.value=="" || lName.value=="" || phoneNumber.value=="" || email.value=="" || password.value==""){
        signUpBtn.textContent = "All fields required...";
        setTimeout(()=>{
            signUpBtn.textContent = "Sign up";
        },1500)
        return;
    }
    let response = await fetch("https://kayaak-clone-backend.herokuapp.com/user/signup",{
        method: "POST",
        body: JSON.stringify({
            first_name: `${fName.value}`,
            last_name:`${lName.value}`,
            email:`${email.value}`,
            password:`${password.value}`,
            phone_num:`${phoneNumber.value}`
        }),
        headers:{"Content-Type": "application/json"}
    });
    let message = await response.json();
    if(message.status=="OK"){
        localStorage.setItem("loginStatus",JSON.stringify({
            isLogged: true,
            user_id: message.user._id,
            first_name: message.user.first_name,
            last_name:message.user.last_name,
            phone_num: message.user.phone_num,
            user_email: message.user.email
        }));
        location.reload(); 
    }else if(message.status=="error" && message.details=="User Already Exists"){
        signUpBtn.textContent = "User Already Exists, Please Sign in";
        setTimeout(()=>{
            signUpBtn.textContent = "Sign up";
            switchToLogin();
        },1200)
    }else{
        signUpBtn.textContent = "Failed Try Again...";
        setTimeout(()=>{
            signUpBtn.textContent = "Sign up";
        },1500)
    }
}

// document.querySelector(".email-login>button").addEventListener('click',switchToLogin);
// document.querySelector(".sign-in-link").addEventListener('click',switchToLogin);
// document.querySelector(".back-btn").addEventListener('click',backToHome);
// document.querySelector(".back-btn-sign-up").addEventListener('click',backToHome);
// document.querySelector(".sign-up-link").addEventListener('click',switchToSignUp);
// document.querySelector("#sign-in-btn").addEventListener('click',userLogin);
// document.querySelector("#sign-up-btn").addEventListener('click',userSignUp);
