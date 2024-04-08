import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <GoogleOAuthProvider clientId="1055561684796-cpmvspiph9eqo2harb3hsg1re8c7vmcg.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
