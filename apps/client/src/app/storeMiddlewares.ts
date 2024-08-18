import { createListenerMiddleware } from "@reduxjs/toolkit";
import { updatetoken } from "../shared/slices/token";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: updatetoken,
  effect: (action) => {
    const token = action.payload;

    if (token === null && window.location.pathname !== "/auth/sign-up") {
      window.location.href = "/auth/sign-up";
    }

    if (token !== null) {
      window.location.href = "/";
    }
  },
});

export default listenerMiddleware;
