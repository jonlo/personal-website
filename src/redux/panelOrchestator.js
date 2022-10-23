import { createSlice } from '@reduxjs/toolkit'

export const panelOrchestator = createSlice({
	name: 'counter',
	initialState: {
		value: 'About',
	},
	reducers: {
		showHeaderPanel:(state, action) => {
			state.value = action.payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { showHeaderPanel } = panelOrchestator.actions

export default panelOrchestator.reducer