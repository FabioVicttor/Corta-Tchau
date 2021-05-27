import { SHOW_CADASTRO } from "../actionTypes";

const initialState = {
  showCadastro: false,
};

export default function ModalCadastro(state = initialState, action) {
  switch (action.type) {
    case SHOW_CADASTRO: {
      return { ...state, showCadastro: !state.showCadastro };
    }
    default:
      return state;
  }
}
