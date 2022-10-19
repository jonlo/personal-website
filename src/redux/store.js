import { configureStore } from '@reduxjs/toolkit'
import panelOrchestator from './panelOrchestator'

export default configureStore({
  reducer: {
    panel: panelOrchestator
  }
})