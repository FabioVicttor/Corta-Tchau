import axios from "axios";

export async function Agendar(date_time, description, user_id, token) {
  try {
    const agendar = await axios.post(
      "https://api-corta-e-tchau.herokuapp.com/scheduling",
      {
        date_time: date_time,
        description: description,
        user_id: user_id,
        status: "SOLICITADO",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return agendar;
  } catch (error) {
    return "error";
  }
}

export async function getAgendamentos(date, token) {
  try {
    const agentamentos = await axios.get(
      "https://api-corta-e-tchau.herokuapp.com/scheduling/filter?data=" + date,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return agentamentos;
  } catch (error) {
    return "error";
  }
}

export async function alteraSituacao(
  situacao,
  date_time,
  description,
  userId,
  id,
  token
) {
  try {
    const agentamentos = await axios.put(
      "https://api-corta-e-tchau.herokuapp.com/scheduling/",
      {
        date_time: date_time,
        description: description,
        user_id: userId,
        status: situacao,
        id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return agentamentos;
  } catch (error) {
    return "error";
  }
}
