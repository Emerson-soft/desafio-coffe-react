import { BrowserRouter } from 'react-router-dom'
import './global.css'
import { Router } from './router/Route'



export function App() {
  return (
    <div className='max-w-screen mx-auto px-5 antialiased mb-40 font-roboto bg-backgournd'>      
      <BrowserRouter>
        <Router />        
      </BrowserRouter>      
    </div>
  )
}

