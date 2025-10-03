import { useState } from "react"
import { Button } from "../Button";

export const Content = () => {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(prev => prev+1)
    }

    return(
    <div>
        <p>Voce clicou {contador} vezes! </p>
        <Button onClick={handleClick}></Button>
    </div> 
    )  
}