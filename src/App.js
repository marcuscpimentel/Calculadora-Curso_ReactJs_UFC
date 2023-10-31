import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("Somar");

  const calcular = () => {
    if (operacao === "Somar") {
      return parseFloat(nro1) + parseFloat(nro2);
    } else if (operacao === "Subtrair") {
      return parseFloat(nro1) - parseFloat(nro2);
    } else if (operacao === "Multiplicar") {
      return parseFloat(nro1) * parseFloat(nro2);
    } else if (operacao === "Dividir") {
      return parseFloat(nro1) / parseFloat(nro2);
    }
  };

  useEffect(() => {
    setResultado(calcular());
  }, [nro1, nro2, operacao]);

  return (
    <div className="App">
      <div className="title">
        <h1> {process.env.REACT_APP_TITULO}</h1>
      </div>
      <div className="Container-1">
        <div class="entradas">
          <div class="entrada1">
            <label class="label">Primeiro Número</label>
            <input
              type="number"
              class="input_style"
              value={nro1}
              onChange={(e) => setNro1(e.target.value)}
            />
          </div>

          <div class="entrada2">
            <label class="label">Segundo Número</label>
            <input
              type="number"
              class="input_style"
              value={nro2}
              onChange={(e) => setNro2(e.target.value)}
            />
          </div>
        </div>

        <div className="operacoes">
          <button
            className={`botao ${operacao === "Somar" ? "selecionado" : ""}`}
            onClick={() => setOperacao("Somar")}
          >
            +
          </button>
          <button
            className={`botao ${operacao === "Subtrair" ? "selecionado" : ""}`}
            onClick={() => setOperacao("Subtrair")}
          >
            -
          </button>
          <button
            className={`botao ${
              operacao === "Multiplicar" ? "selecionado" : ""
            }`}
            onClick={() => setOperacao("Multiplicar")}
          >
            *
          </button>
          <button
            className={`botao ${operacao === "Dividir" ? "selecionado" : ""}`}
            onClick={() => setOperacao("Dividir")}
          >
            /
          </button>
        </div>

        <div class="resultado">
          <label class="label"> Resultado</label>
          <div className="result">{resultado}</div>
        </div>
      </div>
      <div className="rodape">
        <h3>{process.env.REACT_APP_RODAPE}</h3>
      </div>
    </div>
  );
}

export default App;
