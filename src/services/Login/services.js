import axios from "axios";

export function Loginho(login, senha) {
  axios
    .post("https://api-corta-e-tchau.herokuapp.com/autenticate", {
      phone: login,
      password: senha,
    })
    .then((e) => {
      const success = e.data.success;
      if (success) {
        // const phone = e.data.data.user.phone;
        // const name = e.data.data.user.name;
        // const role = e.data.data.user.role;
        // const id = e.data.data.user.id;
        return e.data.data.user;
      }
    });
}
