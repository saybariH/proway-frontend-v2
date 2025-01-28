import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // import tailwindcss styles (global styles)
import AppRouter from '@routes/AppRouter.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
)
