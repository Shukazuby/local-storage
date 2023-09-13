// SignUp page
const userFirstName = document.getElementById("userFirstName");
const userSurname = document.getElementById("userSurname");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userConfirmPass = document.getElementById("userConfirmPass");

function signUp() {
  // e.preventDefault();
  const firstName = userFirstName.value;
  const surName = userSurname.value;
  const nickName = userName.value;
  const email = userEmail.value;
  const password = userPassword.value;
  const confirm = userConfirmPass.value;

  localStorage.setItem("emails", email);
  localStorage.setItem("passwords", password);

  if (confirm !== password) {
    alert("Please confirm password");
  } else {
    if (firstName && surName && nickName && email && password && confirm) {
      alert(`${firstName}, you have successfully Sign Up`);
    } else {
      alert(`Please try sign up again`);
    }
  }
}

// login page 

      const loginContain = document.getElementById("loginCont");
      const loginForm = document.getElementById("loginForm");
      

      function login(e) {
        e.preventDefault();
        // let nick = inputName.value
        const inputName = document.getElementById("userName").value;
        const inputEmail = document.getElementById("userEmails").value;
        const inputPassword = document.getElementById("userPasswords").value;

        let userMail = localStorage.getItem("emails");
        let pass = localStorage.getItem("passwords");
        // alert(userMail)
        
        if ((inputEmail === userMail) && (inputPassword === pass)) {
          alert(`${inputName}, you just logged in`);
          // console.log(username + pass)
        } else {
          alert("Input your details and try again");
        }
      }

