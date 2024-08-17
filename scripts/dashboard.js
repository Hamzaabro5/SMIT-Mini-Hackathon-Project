import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { 
  setDoc,
  doc,
  collection,
  getDocs,
  query
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { auth, db } from "./config.js";

const form = document.querySelector(`form`)
const placeholder = document.querySelector(`#Placeholder`)
const desc = document.querySelector(`#desc`)
const renderdata = document.querySelector(`.renderdata`)
let arr = [];

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`uid` , `=` , uid);
  } else {
    window.location = `./login.html`
}});

form.addEventListener(`submit` , (event)=>{
  event.preventDefault();

   render()
  
   async function addData() {
      await setDoc(doc(db, "blogs", "blogs"),{
        title: placeholder.value,
        description: desc.value,
      });
      alert(`added`);
      
    }
    addData() 

    
    
    
    
    
    placeholder.value = ``
    desc.value = ``
  })
  
      async function getData() {
        arr = [];
        const q = query(collection(db, "blogs"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        arr.push(doc.data());
        
      })
      console.log(arr);
      render()
       }
      getData()
       


function render() {
  renderdata.innerHTML = ``;
  arr.map((item)=>{
    renderdata.innerHTML += `
    <div class="card border-2 border-current p-2 my-6 card-side bg-white text-black shadow-lg">
               <div class="card-body">
                 <h2 class="card-title font-bold placeholder">${item.placeholder}</h2>
                 <p class="desc">${item.desc}</p>
                 <div class="card-actions justify-end">
                   <a class="link link-primary">Update</a>
                   <a class="link link-primary">Delete</a>
                 </div>
               </div>
             </div>
   `
  })
}