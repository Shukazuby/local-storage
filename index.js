// SignUp page
const userFirstName = document.getElementById("userFirstName");
const userSurname = document.getElementById("userSurname");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userConfirmPass = document.getElementById("userConfirmPass");

function signUp() {
  const firstName = userFirstName.value;
  const surName = userSurname.value;
  const nickName = userName.value;
  const email = userEmail.value;
  const password = userPassword.value;
  const confirm = userConfirmPass.value;

  if (confirm !== password) {
    alert("Please confirm password");
  } else {
    if (firstName && surName && nickName && email && password && confirm) {
      localStorage.setItem(
        "signUP",
        JSON.stringify([
          firstName,
          surName,
          nickName,
          email,
          password,
          confirm,
        ])
      );
      alert(`${firstName}, you have successfully Sign Up`);
    } else {
      alert(`Please try sign up again`);
    }
  }
}

// login page 

const loginContain = document.getElementById("loginCont");
const loginForm = document.getElementById("loginForm");
const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");
const inputPassword = document.getElementById("userPassword");
const loginButton = document.getElementById("btn");


function login() {
  const userName = inputName.value;
  const userEmail = inputEmail.value;
  const userPassword = inputPassword.value;

//   let storedData = localStorage.getItem("signUp")
//   if (storedData !== null) {
//     localStorage.getItem(
//       "signUp")
//     alert(`${userName}, you just logged in`);
//   } else {
//     alert("Input your details and try again");
//   }


  if (userName && userEmail && userPassword) {
    localStorage.setItem(
      "signUp")
    alert(`${userName}, you just logged in`);
  } else {
    alert("Input your details and try again");
  }
}
