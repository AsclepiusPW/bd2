import React from 'react';
import { Ocorrencia } from './Ocorrencia';
import './OcorrenciaList.css';

export const OcorrenciaList = ({ocorrencias}) => {
  return (
    <div id='OcorrenciaList'>
      <h2 id='titulo'>Lista de Ocorrências:</h2>
      {ocorrencias.map((ocorrencia, index) => (
        <Ocorrencia
          key={index}
          nome={ocorrencia.nome}
          descricao={ocorrencia.descricao}
          latitude={ocorrencia.latitude}
          longitude={ocorrencia.longitude}
        />
        ))}
    </div>
  );
};
