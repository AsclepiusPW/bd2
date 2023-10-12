import React from 'react';
import './App.css';
import { Header } from "./components/Cabecalho/Header.jsx";
import { RegisterCard } from "./components/Register/Register.jsx"
import { OcorrenciaList } from './components/OcorrenciaList/OcorrenciaList';

function App() {

  return (
    <>
      <div id='header'>
        <Header/>
      </div>
      <div id='content'>
        <RegisterCard/>
        <OcorrenciaList/>
      </div>
    </>
  )
}

export default App
