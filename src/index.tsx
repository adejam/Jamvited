import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import EventContextProvider from './store/contexts/EventContextProvided'
import LanguageContextProvider from './store/contexts/LanguageContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render (
  <React.StrictMode>
    <BrowserRouter >
    <LanguageContextProvider>
      <EventContextProvider>
        <App />
      </EventContextProvider>
    </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
