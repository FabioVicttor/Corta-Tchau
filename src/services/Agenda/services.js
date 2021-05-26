import axios from "axios";

export async function Agendar(date_time, description, user_id, token) {
  try {
    const agendar = await axios.post(
      "https://api-corta-e-tchau.herokuapp.com/scheduling",
      {
        date_time: date_time,
        description: description,
        user_id: user_id,
        status: "REQUESTED",
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

export async function getAgendamentos() {
  try {
    const agentamentos = await axios.get(
      "https://api-corta-e-tchau.herokuapp.com/scheduling"
    );
    return agentamentos;
  } catch (error) {
    return "error";
  }
}
