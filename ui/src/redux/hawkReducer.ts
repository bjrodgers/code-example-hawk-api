import IAppState, { initialState } from "../models/IAppState";
import { AnyAction } from "redux";
import { ActionTypes } from "./hawkActions";

export default function hawkReducer(state = initialState, action: AnyAction): IAppState {
  console.log(action);
  switch(action.type) {
      case ActionTypes.LOADING_HAWKS:
          return {
            ...state,
            isLoadingList: action.payload
          };
  
      case ActionTypes.HAWK_LIST_LOADED:
        return {
          ...state,
          hawks: action.payload
        };

      case ActionTypes.SELECT_HAWK:
        return {
          ...state,
          selectedHawk: action.payload
        }
  }

  return state;
}

