import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import './index.css'

//below is for the App
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
)
