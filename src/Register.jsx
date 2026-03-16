import { useState } from "react";

import { auth } from "./firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function register(){

try{

await createUserWithEmailAndPassword(auth,email,password);

alert("Usuário criado");

}catch(e){

alert(e.message);

}

}

return(

<div>

<h3>Registrar</h3>

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

<button onClick={register}>
Registrar
</button>

</div>

);

}