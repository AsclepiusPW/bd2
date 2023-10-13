import React, { useEffect, useState } from 'react';
import './OcorrenciaForm.css';

export const OcorrenciaForm = ({adicionarOcorrencia}) => {
  const [nomeOcorrencia, setNomeOcorrencia] = useState('');
  const [descricaoOcorrencia, setDescricaoOcorrencia] = useState('');
  const [latitudeOcorrencia, setLatitudeOcorrencia] = useState('');
  const [longitudeOcorrencia, setLongitudeOcorrencia] = useState('');
  

  useEffect(() => {
    const mapDiv = document.querySelector(".map");
    let map;
    let marcador;
    
    async function iniciarMapa(){
      const { Map } = await google.maps.importLibrary("maps");
      let center = { lat: -6.889531952896556, lng: -38.54527473449707 };

      map = new Map(mapDiv, {
        center,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.DROP,
      });

      marcador = new google.maps.Marker({
        position: center,
        map,
        title: "Guardian Eye",
        animation: google.maps.Animation.DROP,
      });

      map.addListener('click', (event) => {

        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setLatitudeOcorrencia(lat);
        setLongitudeOcorrencia(lng);

        map.panTo(event.latLng);
        marcador.setPosition(event.latLng);
      });
    }

    // Verificando a prontidão da API
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      iniciarMapa();
    }
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
        const novaOcorrencia = {
          nome: nomeOcorrencia,
          descricao: descricaoOcorrencia,
          latitude: latitudeOcorrencia,
          longitude: longitudeOcorrencia,
        };
      adicionarOcorrencia(novaOcorrencia);

      setNomeOcorrencia('');
      setDescricaoOcorrencia('');
      setLatitudeOcorrencia('');
      setLongitudeOcorrencia('');
    };

 
  return (
    <>
    <form onSubmit={handleSubmit} id='ocorrenciaForm'>
      <div className="map" style={{ width: '100%', height: '200px' }}></div>
      <div id='nome'>
        <label htmlFor="nomeOcorrencia">Nome da Ocorrência:</label>
        <input
          required
          type="text"
          placeholder="Nome"
          id="nomeOcorrencia"
          value={nomeOcorrencia}
          onChange={(e) => setNomeOcorrencia(e.target.value)}
        />
      </div>
      <div id='descricao'>
        <label htmlFor="descricaoOcorrencia">Descrição:</label>
        <input
          required
          type="text"
          placeholder="Descrição da Ocorrência"
          id="descricaoOcorrencia"
          value={descricaoOcorrencia}
          onChange={(e) => setDescricaoOcorrencia(e.target.value)}
        />
      </div>
      <div id='localOcorrencia'>
      <label htmlFor="latitudeOcorrencia">Latitude:</label>
      <input
        required
        type="text"
        id="latitudeOcorrencia"
        placeholder="Latitude"
        value={latitudeOcorrencia}
        onChange={(e) => setLatitudeOcorrencia(e.target.value)}
      />
      <label htmlFor="longitudeOcorrencia">Longitude:</label>
      <input
        required
        type="text"
        id="longitudeOcorrencia"
        placeholder="Longitude"
        value={longitudeOcorrencia}
        onChange={(e) => setLongitudeOcorrencia(e.target.value)}
      />
      </div>
      <div>
        <button type="submit" id='button'>Registrar Ocorrência</button>
      </div>
    </form>
    
    </>
  );
}