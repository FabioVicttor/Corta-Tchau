import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SHOW,
  SHOW_CONTATOS,
  SHOW_AGENDA,
  SHOW_CADASTRO,
  SHOW_POPUP,
  CORTE,
  LOGIN,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const setShow = () => ({
  type: SHOW,
});

export const setShowContatos = () => ({
  type: SHOW_CONTATOS,
});

export const setShowAgenda = () => ({
  type: SHOW_AGENDA,
});

export const setShowCadastro = () => ({
  type: SHOW_CADASTRO,
});

export const setShowPopUp = () => ({
  type: SHOW_POPUP,
});

export const setCorte = () => ({
  type: CORTE,
});

export const setLogin = (phone, name, role, id, token) => ({
  type: LOGIN,
  payload: {
    phone,
    name,
    role,
    id,
    token,
  },
});
