import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import ModalLogin from "./ModalLogin";
import ModalLoginContatos from "./ModalContatos";

export default combineReducers({ ModalLogin, ModalLoginContatos , todos, visibilityFilter });
