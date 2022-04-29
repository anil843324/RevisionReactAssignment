import counterReducers from "../counter/reducer"

import todoReducer from "../todo/reducer"
import { combineReducers } from "redux"


const rootReducer=combineReducers({
    counterReducers,
    todoReducer

})

export default rootReducer