import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [itens, setItens] = useState(['Feijão', 'Arroz', 'Cenoura']);

  const adicionarItens = () => {

      if (itens.includes(item)) {
          alert(['A lista já contém esse item. Deseja adicionar mais um?']);
        return;
      }

      setItens([...itens, item]);
      setItem('');
    };

  return (
    <div className='App'>
      <h1>Compras</h1>
      <input
      type="text"
      value={item}
      onChange={(e) => setItem(e.target.value)}
      placeholder="Digite o produto:"
      />
      <button onClick={adicionarItens}>Adicionar</button>

      <hr />
      <h2>Lista de Compras:</h2>
      <ul>
      {itens.map((user, index) => (
        <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;