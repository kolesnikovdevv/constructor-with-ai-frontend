import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedComponents: null,
}

const listComponents = createSlice({
  name: "chosenComponents",
  initialState,
  reducers: {
    changingList: (state, action) => {
      state.selectedComponents = action.payload
    },
  },
})

export const { changingList } = listComponents.actions

export default listComponents.reducer
