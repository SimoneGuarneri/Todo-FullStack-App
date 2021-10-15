import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todos",
	initialState: {
		content: [],
	},
	reducers: {
		updateTodos: (state, action) => {
			state.content = [...state.content, action.payload];
		},
		getAllTodos: (state, action) => {
			state.content = action.payload.length > 0 ? action.payload : [];
		},
		modifyTodos: (state, action) => {
			state.content = state.content.map((e) => {
				if (e.id === action.payload.id) {
					e.fatto = !e.fatto;
				}
 
				return e;
			})
		}

	},
});

// Action creators are generated for each case reducer function
export const { updateTodos, getAllTodos, modifyTodos } = todoSlice.actions;
export default todoSlice.reducer;
