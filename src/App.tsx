import { BrowserRouter } from 'react-router-dom'
import './global.css'
import { Router } from './router/Route'



export function App() {
  return (
    <div className='max-w-screen mx-auto px-5  antialiased font-roboto'>      
      <BrowserRouter>
        <Router />                
      </BrowserRouter>      
    </div>
  )
}

