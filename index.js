
function Signup(){
let username_var= document.getElementById("username") ;
let email_var = document.getElementById("email");
let password_var= document.getElementById("pass");

localStorage.setItem("username",username_var.value)
localStorage.setItem("email",email_var.value)
localStorage.setItem("password",password_var.value)
sessionStorage.setItem("username",username_var.value)
window.location.href = "login.html"
}


function login(){
    let email =  document.getElementById("email_login");
    let pass = document.getElementById("pass_login");
    let fetch_email = localStorage.getItem("email");
    let fetch_password = localStorage.getItem("password");

    if(email.value == fetch_email && pass.value == fetch_password){
        window.location.href ="dash.html"
    }
    else{
        alert("match not found")
       window.location.href ="login.html"

    }
}

function dashboard(){
      
     let name_fetch = localStorage.getItem("username");
     let para = document.getElementById("text")

     para.innerHTML = name_fetch;
}