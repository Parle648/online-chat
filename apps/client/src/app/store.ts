import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import listenerMiddleware from "./storeMiddlewares.ts";

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

export { appStore };
