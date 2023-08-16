import "../App.css";
import { useState } from "react";

import Decrement from "./Decrement";
import Increment from "./Increment";

const Center = () => {
    console.log("Mon composant App se render");

    // Je créer un state (une variable) nommée counter, sa valeur initiale est de 0 et la fonction qui permet de le faire changer de valeur en provoquant en un rerender du composant s'appelle setCounter
    const [counter, setCounter] = useState(0);

    return (
        <div className="counter">
            <Decrement setCounter={setCounter} counter={counter} />
            {/* ce que contient ma balise <p></p> dépend du contenu de counter */}
            <p>{counter}</p>
            {/* Je passe en porps counter et setCounter au composant Increment pour qu'il puisse les utiliser */}
            <Increment setCounter={setCounter} counter={counter} />
        </div>
    );
}

export default Center