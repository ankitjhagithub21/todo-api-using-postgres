import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { UserProvider } from './context/UserContext.tsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
    <UserProvider>
    <App />
     <Toaster richColors position='top-right'/>
  </UserProvider>
   </Provider>
)
