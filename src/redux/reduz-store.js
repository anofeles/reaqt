import {combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";


let redsucers = combineReducers({
    auth: authReducer
})

let store = createStore(redsucers);

window.store = store;

export default store;
