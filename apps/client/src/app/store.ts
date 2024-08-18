import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import listenerMiddleware from "./storeMiddlewares.ts";
// import { updatetoken } from "../shared/slices/token.ts";

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

// appStore.dispatch(updatetoken(appStore.getState().token.token));

export { appStore };
