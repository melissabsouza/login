import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [email, setEmail] = useState("");
  const [uName, setName] = useState("");
  const [psw, setPsw] = useState("")
  const [txt, setTxt] = useState("cadastro");

  
  const req = async ()=>{
    try{
      const response = await axios({
        method: "post",
        url: "https://caiohalbert.bsite.net/api/user/newUser",
        headers:{"Content-Type":"application/json"},
        data:{
          "username": uName,
          "email":email,
          "passwordHash":psw,
          "accessLevel":""
        }
      })
      console.log(response);
      setTxt(response.data.email);
    }catch(err){
      console.log(err);
      console.log(txt);
    }
  }

  return (
    <>

      <div>
        <h1>{txt} feito</h1>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder='username' />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='E-mail' />
      <input onChange={(e) => setPsw(e.target.value)} type="password" placeholder='Senha' />
      <button onClick={req}>cadastro</button>
      </div>
    </>
  )
}

export default App
