import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FrirstApp from './primeraApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrirstApp value={1}/>
  </React.StrictMode>,
)
