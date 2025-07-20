let form = document.querySelector("form");
let fullname = document.querySelector("#fullname");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let cpass = document.querySelector("#confirm-password")


form.addEventListener("submit",function(e){
    e.preventDefault();

    let sn,se,sp,cp;

    document.querySelector(".s-name").innerText = "";
    document.querySelector(".s-email").innerText = "";
    document.querySelector(".s-password").innerText = "";
    document.querySelector(".c-password").innerText = "";
    
    const fullNameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/;
    let nameans = fullNameRegex.test(form[0].value)
    if(!nameans){
       sn = document.querySelector(".s-name").innerText = "First letter capital,Number not allowed";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailans = emailRegex.test(form[1].value);
    if(!emailans){
       se = document.querySelector(".s-email").innerText = "Email is invalid";
    }

    const passwordRegex = /^(?=[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    let passwordans = passwordRegex.test(form[2].value);
    if(!passwordans){
       sp = document.querySelector(".s-password").innerText = "Min 8 Char,One uppercase,One digit,One special Char"
    }
    
    let cpass = form[3].value;
    if(form[3].value !== form[2].value){
        cp = document.querySelector(".c-password").innerText = "Password not matched";
    }
    
    if(sn === undefined && se === undefined && sp === undefined && cp === undefined){
        alert("Registration is successful");
    }

})