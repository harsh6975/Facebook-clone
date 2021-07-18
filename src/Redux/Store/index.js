import { createStore,applyMiddleware} from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from '../Reducer/index';


let store;

export function configureStore(){
    store= createStore(reducer,applyMiddleware(thunk,logger));
    return store;
}