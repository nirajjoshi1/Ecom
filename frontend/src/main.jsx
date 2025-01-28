import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            className: "custom-toast-success",
            duration: 3000,
          },
          error: {
            className: "custom-toast-error",
            duration: 3000,
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
