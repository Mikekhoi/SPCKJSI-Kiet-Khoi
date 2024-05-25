import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const auth = getAuth();
const signInEmail = document.getElementById("signin-email");
const signInPass = document.getElementById("signin-password");
const signInBtn = document.getElementById("signin-btn");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var emailValueSI = signInEmail.value;
  var passwordValueSI = signInPass.value;

  if (emailValueSI.trim().length == 0 || passwordValueSI.trim().length == 0) {
    alert("Không để trống");
  } else {
    signInWithEmailAndPassword(auth, emailValueSI, passwordValueSI)
      .then((useCredential) => {
        const user = useCredential.user;
        localStorage.setItem("currentUser", user.email);

        async function signIn() {
          alert("Login successfully");
          window.location.href = "./index.html";
        }
        signIn();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});
