import React from 'react' //Importa react
import ReactDOM from 'react-dom/client' //Importa el DOM
import { CounterApp } from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        {/* Llamanos el componentene*/}
            <CounterApp/>
    </React.StrictMode>
)