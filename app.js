import{initializeApp}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import{getFirestore,collection,getDocs,addDoc,deleteDoc,doc}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
const firebaseConfig={apiKey:"AIzaSyBNEJLoD9S2MNQIzQ8L70SFxkCfElAXZGc",authDomain:"savelink-e70f5.firebaseapp.com",projectId:"savelink-e70f5",storageBucket:"savelink-e70f5.firebasestorage.app",messagingSenderId:"101665182669",appId:"1:101665182669:web:658315b31821e63f96aa84"};
const db=getFirestore(initializeApp(firebaseConfig));let admin=false;
async function load(){let h='';const s=await getDocs(collection(db,'links'));s.forEach(d=>{let x=d.data();h+=`<div class=card><img src="${x.image}"><h3>${x.title}</h3><p>${x.desc}</p><a target=_blank href="${x.link}">Buka</a>${admin?` <button onclick="del('${d.id}')">Hapus</button>`:''}</div>`});list.innerHTML=h}
window.login=async()=>{if(prompt('Password')!=='12345')return;admin=true;const t=prompt('Judul');if(t){await addDoc(collection(db,'links'),{title:t,desc:prompt('Deskripsi'),image:prompt('URL Gambar'),link:prompt('URL Link')});}load();}
window.del=async(id)=>{await deleteDoc(doc(db,'links',id));load();}
load();