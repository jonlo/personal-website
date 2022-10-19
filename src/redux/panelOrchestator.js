import { createSlice } from '@reduxjs/toolkit'

export const panelOrchestator = createSlice({
	name: 'counter',
	initialState: {
		value: 'About',
	},
	reducers: {
		showAbout: state => {
			state.value = 'About';
		},
		showExperience: state => {
			state.value = 'Experience';
		},
	}
})

// Action creators are generated for each case reducer function
export const { showAbout, showExperience } = panelOrchestator.actions

export default panelOrchestator.reducer