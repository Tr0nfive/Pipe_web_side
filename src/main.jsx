
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalPrivd from './Global.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalPrivd>
  <BrowserRouter>
  <App />
  </BrowserRouter>
   </GlobalPrivd>

)
