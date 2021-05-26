import axios from "axios";

export async function Loginho(login, senha) {
  try {
    const teste = await axios.post(
      "https://api-corta-e-tchau.herokuapp.com/autenticate",
      {
        phone: login,
        password: senha,
      }
    );
    return teste.data.data;
  } catch (error) {
    return "error";
  }
}

// const success = e.data.success;
// const phone = e.data.data.user.phone;
// const name = e.data.data.user.name;
// const role = e.data.data.user.role;
// const id = e.data.data.user.id;
