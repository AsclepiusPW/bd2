import React from 'react';
import "./Ocorrencia.css";


export const Ocorrencia = ({ nome, descricao, latitude, longitude }) => {
  return (
    <div id='ocorrencia'>
      <p>Nome: {nome}</p>
      <p>Descrição: {descricao}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
};

