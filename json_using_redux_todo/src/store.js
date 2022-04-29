import { createStore,applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

import rootReducer from "./redux/combineReducers";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// const customMidddleware=(store)=>(next)=>(action)=>{

//     if(typeof action ==='function'){
//         return action(store.dispatch)
//     }
//    next(action);
// }
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware));



const store=createStore(rootReducer,enhancer)


export default store