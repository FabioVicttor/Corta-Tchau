import { LOGIN } from "../actionTypes";

const initialState = {
  phone: null,
  name: null,
  role: null,
  id: null,
};

export default function Login(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        phone: action.payload.phone,
        name: action.payload.name,
        role: action.payload.role,
        id: action.payload.id,
      };
    }
    default:
      return state;
  }
}
