import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './Context/UserContextProvider.jsx'
import SearchContextProvider from './Context/SearchContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchContextProvider>
  <UserContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </UserContextProvider>
  </SearchContextProvider>
)
