import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import ModalLogin from "./ModalLogin";
import ModalContatos from "./ModalContatos";

export default combineReducers({ ModalLogin, ModalContatos , todos, visibilityFilter });
