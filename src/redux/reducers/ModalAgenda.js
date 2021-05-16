import { SHOW_AGENDA } from "../actionTypes";

const initialState = {
  showAgenda: false,
};

export default function ModalAgenda(state = initialState, action) {
  switch (action.type) {
    case SHOW_AGENDA: {
      return { ...state, showAgenda: !state.showAgenda };
    }
    default:
      return state;
  }
}
