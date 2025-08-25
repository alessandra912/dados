// segundo-projeto\src\components\ListaDeProduto\index.js

import React from "react";
import './style.css';

const ListaDeProdutos = ({ itens = [] }) => {
    return (
        <ol className="lista-produtos">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
    );
}

export default ListaDeProdutos;