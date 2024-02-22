import { configureStore } from "@reduxjs/toolkit"
import chosenComponentsReducer from "./chosen-сomponents/chosen-сomponents"

export const store = configureStore({
  reducer: {
    chosenComponents: chosenComponentsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
