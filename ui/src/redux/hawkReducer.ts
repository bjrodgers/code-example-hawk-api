import { AnyAction } from "redux";
import IAppState from "../models/IAppState";
import IHawk from "../models/IHawk";
import { ActionTypes } from "./hawkActions";

const initialState: IAppState = {
  filter: '',
  hawks: [],
  isLoadingHawk: false,
  isLoadingList: false,
  selectedHawk: {} as IHawk
};

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

