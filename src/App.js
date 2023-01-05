import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[nro1, setNro1] = useState(0);
  const[nro2, setNro2] = useState(0);
  const[resultado, setResultado] = useState(0);
  const[operacao, setOperacao] = useState('Somar');

  const calcular= () => {
    return parseFloat(nro1) + parseFloat(nro2);
  }

  useEffect(()=>{
    setResultado(calcular());
  }, [nro1, nro2, operacao]);

  
  return (
    <div className="App">
      <h1> App {process.env.REACT_APP_TITULO}</h1>
      <div class='input'>
        <label class='label'>Primeiro Número</label>
        <input type='number' class='input_style' value={nro1} onChange={(e) => setNro1(e.target.value)}/>
      </div>
      <div class='input'>
        <label class='label'>Segundo Número</label>
        <input type='number' class='input_style' value={nro2} onChange={(e) => setNro2(e.target.value)}/>
      </div>

      <div class='botao_somar'>
        <button class='botao' onChange={(e) => setOperacao(e.target.value)}> + </button>
      </div>

      <div class='resultado'>
        <label class='label'> Resultado {resultado} </label>
      </div>
      <h3>{process.env.REACT_APP_RODAPE}</h3>
    </div>
    
  );
}

export default App;
