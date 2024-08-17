import { combineReducers } from "@reduxjs/toolkit";
import bookings from "../shared/slices/bookings";

const rootReducer: any = combineReducers({
  booking: bookings,
});

export { rootReducer };
