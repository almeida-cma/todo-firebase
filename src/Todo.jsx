import { useState,useEffect } from "react";

import { db,auth } from "./firebase";

import {

 collection,
 addDoc,
 query,
 where,
 onSnapshot,
 deleteDoc,
 doc,
 updateDoc

} from "firebase/firestore";

import { signOut } from "firebase/auth";

export default function Todo(){

const [task,setTask] = useState("");
const [tasks,setTasks] = useState([]);

useEffect(()=>{

if(!auth.currentUser) return;

const q = query(

 collection(db,"tasks"),
 where("user","==",auth.currentUser.uid)

);

const unsubscribe = onSnapshot(q,(snapshot)=>{

const lista = snapshot.docs.map(doc=>({

 id:doc.id,
 ...doc.data()

}));

setTasks(lista);

});

return ()=>unsubscribe();

},[]);

async function addTask(){

if(!task) return;

await addDoc(collection(db,"tasks"),{

 text:task,
 done:false,
 user:auth.currentUser.uid

});

setTask("");

}

async function deleteTask(id){

await deleteDoc(doc(db,"tasks",id));

}

async function toggleDone(id,done){

await updateDoc(doc(db,"tasks",id),{

 done:!done

});

}

async function logout(){

await signOut(auth);

}

return(

<div>

<h2>Minhas tarefas</h2>

<button onClick={logout}>
Logout
</button>

<br/><br/>

<input
value={task}
placeholder="Nova tarefa"
onChange={e=>setTask(e.target.value)}
/>

<button onClick={addTask}>
Adicionar
</button>

<hr/>

{tasks.map(t=>(

<div key={t.id}>

<input
type="checkbox"
checked={t.done}
onChange={()=>toggleDone(t.id,t.done)}
/>

<span style={{
textDecoration:t.done ? "line-through":"none"
}}>

{t.text}

</span>

<button onClick={()=>deleteTask(t.id)}>
Excluir
</button>

</div>

))}

</div>

);

}