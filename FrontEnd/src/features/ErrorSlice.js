import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
	name: "error",
	initialState: {
		code: null,
        message: ""
	},
	reducers: {
		setError: (state, action) => {
            state.code = action.payload.code;
            state.message = action.payload.message;
		},
        resetError: (state) => {
            state.code = null;
            state.message = "";
        }
	},
});

// Action creators are generated for each case reducer function
export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
