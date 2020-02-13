import IHawk from '../models/IHawk';
import { loadAllHawks, saveHawk } from '../api/hawkService';

export enum ActionTypes {
    LOADING_HAWKS = 'LOADING_HAWKS',
    HAWK_LIST_LOADED = 'HAWK_LIST_LOADED',
    SELECT_HAWK = 'SELECT_HAWK',
    SAVING_HAWK = 'SAVING_HAWK',
    HAWK_SAVED = 'HAWK_SAVED'
}

export function loadHawksAction() {
    return async (dispatch: any) => {
        dispatch({ type: ActionTypes.LOADING_HAWKS, payload: true});

        try {
            let hawks:IHawk[] = await loadAllHawks();
            dispatch({ type: ActionTypes.HAWK_LIST_LOADED, payload: hawks});
        } catch(e) {
            console.error(e);
            // TODO - dispatch error action to dislay to user

        } 
        dispatch({ type: ActionTypes.LOADING_HAWKS, payload: false});
    }
}

export function saveHawkAction(hawk:IHawk) {
    return async (dispatch: any) => {
        dispatch({type: ActionTypes.SAVING_HAWK, payload: hawk});
        try {
            await saveHawk(hawk);
            dispatch({ type: ActionTypes.HAWK_SAVED, payload: hawk});
        } catch(e) {
            console.error(e);
            // TODO - dispatch error action to remove hawk from list
        }
    }
}
