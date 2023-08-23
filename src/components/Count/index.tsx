import React, { useState } from "react";
export function Contador() {
    const [valor, setValor] = useState(0);
    function adicionaValor() {
        setValor(valor + 1);
    };
    return (
        <div>
            <p>Contador: {valor}</p>
            <button onClick={adicionaValor}>Adicionar</button>
        </div>
    );


}