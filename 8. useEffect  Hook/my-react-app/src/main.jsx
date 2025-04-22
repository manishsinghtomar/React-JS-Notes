import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoggerComponent from './components/LoggerComponent.jsx'
import TimerComponent from './components/TimerComponent.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import ResizeComponent from './components/ResizeComponent.jsx'
import MultiEffectComponent from './components/MultiEffectComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LoggerComponent/> */}
    {/* <TimerComponent /> */}
    {/* <DataFetcher/> */}
    {/* <ResizeComponent /> */}
    <MultiEffectComponent />
    
  </StrictMode>,
)
