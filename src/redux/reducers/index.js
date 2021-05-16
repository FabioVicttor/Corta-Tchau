import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import ModalLogin from "./ModalLogin";
import ModalContatos from "./ModalContatos";
import ModalAgenda from "./ModalAgenda";
import ModalAgendaCorte from "./ModalAgendaCorte";

export default combineReducers({
  ModalLogin,
  ModalContatos,
  ModalAgenda,
  ModalAgendaCorte,
  todos,
  visibilityFilter,
});
