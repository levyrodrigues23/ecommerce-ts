import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'

import CartProvider from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  
  <StrictMode>
    
    < CartProvider >
    <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
  <RouterProvider router={router} />
  </CartProvider>
</StrictMode>

)
