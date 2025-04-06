import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router'

import CartProvider from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  
  
  <StrictMode> 
    < CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
</StrictMode>

)
