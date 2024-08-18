import { combineReducers } from "@reduxjs/toolkit";
import token from "../shared/slices/token";

const rootReducer: any = combineReducers({
  token: token,
});

export { rootReducer };
