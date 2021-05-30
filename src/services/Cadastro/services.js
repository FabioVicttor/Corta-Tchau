import axios from "axios";

export async function Cadastrar(telefone, nome, senha) {
  try {
    const response = await axios.post(
      "https://api-corta-e-tchau.herokuapp.com/user",
      {
        phone: telefone,
        name: nome,
        password: senha,
        role: "customer"
      }
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
}
