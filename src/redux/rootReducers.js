import { combineReducers } from "redux";
import counterSlice from "./features/countSlice";

const rootReducers = combineReducers({
    counter: counterSlice,
})

export default rootReducers;