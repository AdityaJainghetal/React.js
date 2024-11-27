
import { createRoot } from 'react-dom/client'



import App from './App.jsx'
import CounterContext from './counterContext.jsx'


createRoot(document.getElementById('root')).render(
    <CounterContext>
        <App />

    </CounterContext>
    

)
