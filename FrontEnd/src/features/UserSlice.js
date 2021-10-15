import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: -1,
    username: "",
    logged: false,
  },
  reducers: {
    setState: (state, action) => {
      return action.payload;
    }
  }
});


// Action creators are generated for each case reducer function
export const { setState } = userSlice.actions
export default userSlice.reducer