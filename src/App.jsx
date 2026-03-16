import { useEffect, useState } from "react";

import { auth } from "./firebase";

import { onAuthStateChanged } from "firebase/auth";

import Login from "./Login";
import Register from "./Register";
import Todo from "./Todo";

export default function App(){

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth,(u)=>{

 setUser(u);
 setLoading(false);

});

return ()=>unsubscribe();

},[]);

if(loading) return <p>Carregando...</p>;

return(

<div>

<h1>Todo App</h1>

{user ? <Todo/> :

<>

<Login/>
<Register/>

</>

}

</div>

);

}