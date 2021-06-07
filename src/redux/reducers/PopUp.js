import { SHOW_POPUP } from "../actionTypes";

const initialState = {
  showPopUp: false,
  tipo: null,
  msg: null,
};

export default function ModalPopUp(state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP: {
      return {
        ...state,
        showPopUp: !state.showPopUp,
        tipo: action.payload.tipo,
        msg: action.payload.msg,
      };
    }
    default:
      return state;
  }
}
