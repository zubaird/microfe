import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import S1 from 'remoteApp/S1'
import S2 from 'remoteApp2/S2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <S1 />
    <S2 />
  </React.StrictMode>,
)
