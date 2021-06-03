import { SHOW_POPUP } from "../actionTypes";

const initialState = {
  showPopUp: false,
};

export default function ModalPopUp(state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP: {
      return { ...state, showPopUp: !state.showPopUp };
    }
    default:
      return state;
  }
}
