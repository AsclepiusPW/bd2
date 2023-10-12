import React from 'react';

const Ocorrencia = ({ ocorrencia }) => {
  return (
    <div className="ocorrencia">
      <h2>{ocorrencia.nome}</h2>
      <p>{ocorrencia.descricao}</p>
      <p>Latitude: {ocorrencia.latitude}</p>
      <p>Longitude: {ocorrencia.longitude}</p>
    </div>
  );
};

export default Ocorrencia;