import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import ModalLogin from "./ModalLogin";
import ModalContatos from "./ModalContatos";
import ModalAgenda from "./ModalAgenda";
import ModalAgendaCorte from "./ModalAgendaCorte";
import Login from "./Login";
import ModalCadastro from "./ModalCadastro";
import ModalPopUp from "./PopUp";

export default combineReducers({
  ModalLogin,
  ModalContatos,
  ModalAgenda,
  ModalAgendaCorte,
  ModalCadastro,
  Login,
  ModalPopUp,
  todos,
  visibilityFilter,
});
