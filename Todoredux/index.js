import { store } from "./redux/store.js";



import { addItem} from "./redux/action.js"


console.log(store.getState());

store.dispatch(addItem("anil"));

console.log(store.getState());

