import { SHOW_CONTATOS } from "../actionTypes";

const initialState = {
  showContatos: false,
};

export default function ModalContatos(state = initialState, action) {
  switch (action.type) {
    case SHOW_CONTATOS: {
      return { ...state, showContatos: !state.showContatos };
    }
    default:
      return state;
  }
}
