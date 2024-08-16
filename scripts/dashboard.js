import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { auth, db } from "./config.js";

const form = document.querySelector(`form`)
const placeholder = document.querySelector(`#Placeholder`)
const desc = document.querySelector(`#desc`)
const renderdata = document.querySelector(`.renderdata`)
let arr;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`uid` , `=` , uid);
  } else {
    window.location = `./login.html`
}});

function render() {
  renderdata.innerHTML += `
  <div class="card border-2 border-current p-2 my-6 card-side bg-white text-black shadow-lg">
             <div class="card-body">
               <h2 class="card-title font-bold placeholderdata">${placeholder.value}</h2>
               <p class="descdata">${desc.value}</p>
               <div class="card-actions justify-end">
                 <a class="link link-primary">Update</a>
                 <a class="link link-primary">Delete</a>
               </div>
             </div>
           </div>
 `
}

form.addEventListener(`submit` , (event)=>{
  event.preventDefault();

   render()
  
   async function addData() {
      await setDoc(doc(db, "title"),{
        title: placeholder.value,
        description: desc.value,
      });
      alert(`added`);
      
    }
    addData()

    async function getData() {
      arr = [];
      const q = collection(db, "title");
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id});
      });
       render()
     }
     getData()












  placeholder.value = ``
  desc.value = ``
})
