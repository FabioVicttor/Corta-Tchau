import axios from "axios";

export function Login(login,senha){
    axios.post("https://api-corta-e-tchau.herokuapp.com/autenticate", {
      phone: login,
      password:senha,
    }).then((e)=>{
        console.log(e)
    });
}