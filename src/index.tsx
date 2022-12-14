import React from 'react'
// import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { hydrate, render } from 'react-dom'

const root = document.getElementById('root') as HTMLElement

if (root.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  )
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
