import React from 'react';
import Ocorrencia from './Ocorrencia'; 
import './OcorrenciaList.css';

export const OcorrenciaList = ({ ocorrencias }) => {
  return (
    <div id='OcorrenciaList'>
      <h2 id='titulo'>Lista de Ocorrências:</h2>
      <ul>
        {ocorrencias && Array.isArray(ocorrencias) ? (
          ocorrencias.map((ocorrencia, index) => (
            <li key={index}>
              <Ocorrencia dados={ocorrencia} />
            </li>
          ))
        ) : null}
      </ul>
    </div>
  );
}