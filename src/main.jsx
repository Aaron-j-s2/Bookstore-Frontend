import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearachContextShare from './context/SearachContextShare.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <GoogleOAuthProvider clientId="948034016695-m764juuc2qdji6ec7a3m1avhg4pk1lft.apps.googleusercontent.com">
      <SearachContextShare> 
<App />

      </SearachContextShare>
     
      
      </GoogleOAuthProvider>
    
    </BrowserRouter>
    
  </StrictMode>,
)
