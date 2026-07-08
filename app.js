import{initializeApp}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import{getFirestore,collection,getDocs,addDoc,deleteDoc,doc}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
const c={apiKey:"AIzaSyBNEJLoD9S2MNQIzQ8L70SFxkCfElAXZGc",authDomain:"savelink-e70f5.firebaseapp.com",projectId:"savelink-e70f5",storageBucket:"savelink-e70f5.firebasestorage.app",messagingSenderId:"101665182669",appId:"1:101665182669:web:658315b31821e63f96aa84"};
const db=getFirestore(initializeApp(c));let admin=false;
async function load(){list.innerHTML='';(await getDocs(collection(db,'links'))).forEach(x=>{let v=x.data();list.innerHTML+=`<div class=card><img src="${v.image}"><h3>${v.title}</h3><p>${v.desc}</p><a href="${v.link}" target=_blank>Buka</a> ${admin?`<button onclick="del('${x.id}')">Hapus</button>`:''}</div>`})}
window.login=()=>{if(prompt('Password')==='12345'){admin=true;adminDiv.style.display='block';load();}}
const adminDiv=document.getElementById('admin');
save.onclick=async()=>{await addDoc(collection(db,'links'),{title:t.value,desc:d.value,image:i.value,link:l.value});t.value=d.value=i.value=l.value='';load();}
window.del=async(id)=>{await deleteDoc(doc(db,'links',id));load();}
load();