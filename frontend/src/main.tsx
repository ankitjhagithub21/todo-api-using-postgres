import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { UserProvider } from './context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <App />
     <Toaster richColors position='top-right'/>
  </UserProvider>,
)
