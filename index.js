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

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  if (confirm !== password) {
    alert("Please confirm password");
  } else {
    if (firstName && surName && nickName && email && password && confirm) {
<<<<<<< HEAD
=======
      localStorage.setItem(
        "signUP",
        JSON.stringify([firstName, surName, nickName, email, password, confirm])
      );
>>>>>>> b82496ba8da2803395cabc85008a4310ff6f2c1c
      alert(`${firstName}, you have successfully Sign Up`);
    } else {
      alert(`Please try sign up again`);
    }
  }
}

// login page

const loginContain = document.getElementById("loginCont");
      const loginForm = document.getElementById("loginForm");
      const inputName = document.getElementById("userName").value;
      const inputEmail = document.getElementById("userEmail").value;
      const inputPassword = document.getElementById("userPassword").value;

<<<<<<< HEAD
      function login() {
        let username = localStorage.getItem("email");
        let pass = localStorage.getItem("password");
        
        if ((inputEmail === username) && (inputPassword === pass)) {
          alert(`${inputName}, you just logged in`);
        } else {
          alert("Input your details and try again");
        }
      }

=======
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
>>>>>>> b82496ba8da2803395cabc85008a4310ff6f2c1c
