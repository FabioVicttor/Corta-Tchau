import { CORTE } from "../actionTypes";

const initialState = {
  corte: 0,
};

export default function ModalAgendaCorte(state = initialState, action) {
  switch (action.type) {
    case CORTE: {
      return { ...state, corte: !state.corte };
    }
    default:
      return state;
  }
}
