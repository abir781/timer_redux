import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import TimerRoot from './TimerRoot.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

        <TimerRoot></TimerRoot>

    </Provider>
  
  </StrictMode>,
)
