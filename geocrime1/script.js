
document.addEventListener('DOMContentLoaded', async function() {
    const ocorrencias = [];
    const adicionarOcorrencia = async (ocorrencia) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ocorrencia)
        }
        await fetch("http://localhost:3000/pontos", options).then((res)=> {
            console.log(res.json());
        });
        renderOcorrenciaList();
    }
    const renderOcorrenciaList = () => {
        const ocorrenciaList = document.getElementById('OcorrenciaList');
        ocorrenciaList.innerHTML = '<h2 id="titulo">Lista de Ocorrências:</h2>';
        ocorrencias.forEach((ocorrencia, index) => {
            const uniqueId = `mostradorDeLocal_${index}`;
            ocorrenciaList.innerHTML += `
            <div class="ocorrencia">
                <p>Título: ${ocorrencia.nome}</p>
                <p>Tipo: ${ocorrencia.descricao}</p>
                <p>Data e Hora: ${new Date(ocorrencia.dataHora).toLocaleString()}</p>
                <p>Latitude: ${ocorrencia.latitude}</p>
                <p>Longitude: ${ocorrencia.longitude}</p>
                <button id="${uniqueId}" class="mostradorDeLocal">Mostrar Local</button>
            </div>`;

            const mostrarLocalBtn = document.getElementById(uniqueId);
            mostrarLocalBtn.addEventListener('click', () => {
                const lat = parseFloat(ocorrencia.latitude);
                const lng = parseFloat(ocorrencia.longitude);
                const position = { lat, lng };

                map.panTo(position);
                marcador.setPosition(position);
            });
        });
    };

    const form = document.getElementById('ocorrenciaForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const nomeOcorrencia = document.getElementById('nomeOcorrencia').value;
        const descricaoOcorrencia = document.getElementById('descricaoOcorrencia').value;
        const dataHoraOcorrencia = document.getElementById('dataHoraOcorrencia').value;
        const latitudeOcorrencia = document.getElementById('latitudeOcorrencia').value;
        const longitudeOcorrencia = document.getElementById('longitudeOcorrencia').value;

        const novaOcorrencia = {
            titulo: nomeOcorrencia,
            tipo: descricaoOcorrencia,
            dataHora: dataHoraOcorrencia,
            lat: latitudeOcorrencia,
            lng: longitudeOcorrencia,
        };
        await adicionarOcorrencia(novaOcorrencia);

        document.getElementById('nomeOcorrencia').value = '';
        document.getElementById('descricaoOcorrencia').value = '';
        document.getElementById('dataHoraOcorrencia').value = '';
        document.getElementById('latitudeOcorrencia').value = '';
        document.getElementById('longitudeOcorrencia').value = '';
    });

    const mapDiv = document.querySelector(".map");
    let map;
    let marcador;

    async function iniciarMapa() {
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

            document.getElementById('latitudeOcorrencia').value = lat;
            document.getElementById('longitudeOcorrencia').value = lng;

            map.panTo(event.latLng);
            marcador.setPosition(event.latLng);
        });
    }

    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        iniciarMapa();
    }
});
