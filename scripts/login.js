import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {auth} from "./config.js";

const form = document.querySelector(`form`)
const email = document.querySelector(`#email`)
const password = document.querySelector(`#password`)
const signup = document.querySelector(`.Signup`)


form.addEventListener(`submit` , (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user === true);
    if (user) {
      signup.innerHTML =`<li><a href="#">Logout</a></li>`
    } else {
      
    }




    window.location = `./index.html`

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})