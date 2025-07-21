import axios from "axios"
import { useEffect, useState } from "react"

export const App = ()=>{
  const [user,setuser] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPagina,setTotalPaginas] = useState(1);

  const options = (num)=>{
    let opts = [];
    for (let i = 0; i < num; i++) {
        opts.push(<option value={1} key={1}> Pagina {i} </option>)
    }
    console.log(opts);
    return opts;
  }

useEffect(()=>{
  axios.get(`https://reqres.in/api/users?page=${pagina}`,{
    headers:{
      'Content-Type':"application/json",
      "x-api-key":"reqres-free-v1"
    }
  }).then((response)=>{
    console.log(response.status)
  }).catch((error)=>{
    console.log(error);
  })
},[pagina]);

  return (
    <div>
      <select value={pagina}  onChange={(evento)=>{
        setPagina(evento.target.value)
      }} >
        {options(totalPagina)}
      </select>
      {user.map((user)=>{
        <div key={user.id} >
          <p>{user.first_name}</p>
        </div>
      })}
    </div>
  ) 
}