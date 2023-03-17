import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.less'

//Disable Console.log Production Mode
if (import.meta.env.VITE_MODE === 'production') {
  console.log = () => { };
  console.time = () => { };
  console.timeLog = () => { };
  console.timeEnd = () => { };
  console.warn = () => { };
  console.count = () => { };
  console.countReset = () => { };
  console.error = () => { };
  console.info = () => { };
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   </React.StrictMode>
)
