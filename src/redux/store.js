import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
});

export default store;