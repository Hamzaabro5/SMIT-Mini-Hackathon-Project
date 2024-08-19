// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// import { 
//   addDoc,
//   doc,
//   collection,
//   getDocs,
//   query
//  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
// import { auth, db } from "./config.js";




// const form = document.querySelector(`form`)
// let placeholder = document.querySelector(`#Placeholder`)
// let desc = document.querySelector(`#desc`)
// const renderdata = document.querySelector(`.renderdata`)
// let arr = [];




// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log(`uid` , `=` , uid);
//   } else {
//     window.location = `./login.html`
// }});



// async function getData() {
//   arr = [];
//   const querySnapshot = await getDocs(collection(db, "blogs"));
//   querySnapshot.forEach((doc) => {
//   arr.push({...doc.data(), id: doc.id});
      
// })
// console.log(arr);
// render()
// }
// getData()
     


  
//   function render() {

//     renderdata.innerHTML = ``
//     arr.map((item)=>{
//       renderdata.innerHTML += `
//       <div class="card border-2 border-current p-2 my-6 card-side bg-white text-black shadow-lg">
//                  <div class="card-body">
//                    <h2 class="card-title font-bold">${item.placeholder}</h2>
//                    <p>${item.desc}</p>
//                    <div class="card-actions justify-end">
//                      <a class="link link-primary">Update</a>
//                      <a class="link link-primary">Delete</a>
//                    </div>
//                  </div>
//                </div>
//      `
//     })
//   }
//   render()



// form.addEventListener(`submit` , async(event)=>{
//   event.preventDefault();

//   renderdata.innerHTML = ``

//   try {
//     const docRef = await addDoc(collection(db, "blogs"), {
//       title: placeholder.value,
//       Description: desc.value,
//     });
//     arr.push({
//       title: placeholder.value,
//       Description: desc.value,

//     })
//     render()
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
//     placeholder.value= ``
//     desc.value= ``
//  })
  


















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