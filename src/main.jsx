import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import TimerRoot from './TimerRoot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimerRoot></TimerRoot>
  </StrictMode>,
)
