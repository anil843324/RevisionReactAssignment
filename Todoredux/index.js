import { store } from "./redux/store.js";



import { addItem,removeItem} from "./redux/action.js"


console.log(store.getState());

store.dispatch(addItem("anil"));
store.dispatch(addItem("Anil"));
store.dispatch(removeItem(0));

console.log(store.getState());

