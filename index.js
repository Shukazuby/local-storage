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
        JSON.stringify([firstName, surName, nickName, email, password, confirm])
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
  const userNameL = inputName.value;
  const userEmailL = inputEmail.value;
  const userPasswordL = inputPassword.value;

  if (userNameL && userEmailL && userPasswordL) {
    localStorage.setItem(
      "login",
      JSON.stringify([userNameL, userEmailL, userFirstName])
    );
    alert(`${userNameL}, you just logged in`);
  } else {
    alert("Input your details and try again");
  }


  // const userNameL = localStorage.getItem('signUp');
  // const userEmailL = localStorage.getItem('signUp');
  // const userPasswordL = localStorage.getItem('signUp');

  // if (userNameL && userEmailL && userPasswordL) {
  //   localStorage.getItem(
  //     "signUp");
  //   alert(`${userNameL}, you just logged in`);
  // } else {
  //   alert("Input your details and try again");
  // }
}
