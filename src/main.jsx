import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainPost from './componets/main-post-/MainPost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPost />
  </StrictMode>,
)
