//Importar librerías
import { Fragment } from "react";
import { useState } from "react";

export function CounterApp() {

    const [counter, setCounter] = useState(0);

    const sumar = () =>{
        setCounter(counter + 1);
    }
    
    const restar = () =>{

        if (counter <= 0){
            alert("Ya llegue a cero, no puefo bajar más :'c");
            setCounter(0);
        }
        else{
            setCounter(counter - 1);
        }

    }

    const resetear = () =>{
        setCounter(0);
    }

    return(
        <Fragment>
            <section  className="contador">
                <h1>Mi primer contador</h1>
                <h2>{ counter }</h2>
            </section>

            <section className="buttons">
                <button onClick={sumar}>Sumar</button>
                <button onClick={resetear}>Resetear</button>
                <button onClick={restar}>Restar</button>
            </section>
        </Fragment>
    )
}

export default CounterApp;