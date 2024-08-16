import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";


const loginnavchange = document.querySelector(`.loginnavchange`)


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    loginnavchange.innerHTML =
    `<div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between" href="./dashboard.html">
            Dashboard
          </a>
        </li>
        <li><a class="logout">Logout</a></li>
      </ul>
    </div>
    `
  } else {
    loginnavchange.innerHTML =`
    <div class="loginnavchange">
                    <a href="login.html" class="btn btn-ghost text-xl text-white">Login</a>
                </div>
    `
}});
