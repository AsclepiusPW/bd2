import React, { useState } from 'react';
import './App.css';
import { Header } from "./components/Cabecalho/Header.jsx";
import { RegisterCard } from "./components/Register/Register.jsx"
import { OcorrenciaList } from './components/OcorrenciaList/OcorrenciaList';

function App() {
  const [ocorrencias, setOcorrencias] = useState([]);

  const adicionarOcorrencia = (ocorrencia) => {
    setOcorrencias([...ocorrencias, ocorrencia]);
  };

  return (
    <>
      <div id='header'>
        <Header/>
      </div>
      <div id='content'>
        <RegisterCard adicionarOcorrencia={adicionarOcorrencia} />
        <OcorrenciaList ocorrencias={ocorrencias} />
      </div>
    </>
    )
}

export default App