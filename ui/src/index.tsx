import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from "redux-thunk";
import App from './App';
import './index.css';
import IAppState from './models/IAppState';
import { loadHawksAction } from './redux/hawkActions';
import hawkReducer from './redux/hawkReducer';

const store:Store<IAppState, any> = createStore(hawkReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);

// let hawk1:IHawk = {
//     id:2,
//     name:'Hawk Two', 
//     gender:'FEMALE',
//     size:'LARGE',
//     behaviorDescription: '',
//     colorDescription: 'Black',
//     habitatDescription: '',
//     lengthBegin: 1,
//     lengthEnd: 3,
//     pictureUrl: '',
//     weightBegin: 5,
//     weightEnd: 7,
//     wingspanBegin: 10,
//     wingspanEnd: 12
// }
// store.dispatch(saveHawkAction(hawk1));


store.dispatch(loadHawksAction());
