import { createStore } from "redux";
import initial from "./initial";
import reducer from "./reducers/reducer";

// protective wrapper around the state so that it isn't accidentally updated in other places

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;