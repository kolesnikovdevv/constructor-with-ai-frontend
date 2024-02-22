import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedComponents: [
    {
      id: 0.1252590700065055,
      name: "Item  2",
      chosen: false,
      selected: false,
    },
    {
      id: 0.8157012070546359,
      name: "Item  1",
      chosen: false,
      selected: false,
    },
    {
      id: 0.4096626660690659,
      name: "Item  1",
      chosen: false,
      selected: false,
    },
  ],
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
