import { useState } from "react";

import { auth } from "./firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function login(){

try{

await signInWithEmailAndPassword(auth,email,password);

}catch(e){

alert(e.message);

}

}

return(

<div>

<h3>Login</h3>

<input
placeholder="email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="senha"
value={password}
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={login}>
Entrar
</button>

</div>

);

}