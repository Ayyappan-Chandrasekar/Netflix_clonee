// Log.addEventListener("click" ,(e) => {
//   // select Login input Email, password

// let email = document.getElementById(".form-control").value
// let pass = document.getElementById(".form-control").value

// // Login button

// let Log = document.getElementById("Log-in")
//   e.preventDefault()
//   if (email.length>=5 && pass.length < 4){
//     alert('Login successful!')
//     window.location.href = 'index.html';
//   }else{
//     alert(`Email mini 5 character
//       and Password max 4`)
//   }
// })

// Login button



function Login(event) {
  // select Login input Email, password

  let email = document.querySelector(".input-email").value;
  let pass = document.querySelector(".input-password").value;
  // let Log = document.getElementById("Log-in");

  event.preventDefault();
  
if(email=="" && pass==""){
  alert("Please check email and password is not enter")
  return false
}

if(email==""){
  alert("Please check email is not enter")
  return false
}

if(pass==""){
  alert("Please check password is not enter")
  return false
}
  
  if (email.length >= 5 && pass.length <= 4) {
    alert("Login successful!");
    window.location.href = "index.html";
    return false
  }
  else {
    alert("Email mini 5 character and Password max 4");
      return false
  }
}

// New user signup

function Signup(event){
  event.preventDefault()
  let signup_btn = document.querySelector(".Signup")
  signup_btn.style.display="block"
  let Login_btn = document.querySelector(".Login")
  Login_btn.style.display="none"

}


function Signin(event){
  event.preventDefault()
  let Signup_btn = document.querySelector(".Signup")
  Signup_btn.style.display="none"
  let Login_btn = document.querySelector(".Login")
  Login_btn.style.display="block"

}
