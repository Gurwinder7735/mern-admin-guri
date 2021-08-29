import * as actionType from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
};

export const alertsReducer = (state = initialState, action) => {
    
  switch (action.type) {

    case actionType.SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: "",
      };

    case actionType.ERROR:
      return {
        ...state,
        error: action.payload,
        success: "",
      };

      case actionType.CLEAR:
      return {
        ...state,
        error: "",
        success: "",
        loading: ""
      };

    default:
      return state;
  }
};
