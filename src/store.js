import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "./components/index";

const middleware = applyMiddleware(promise(), thunk, createLogger());
export default createStore(reducers, middleware);
