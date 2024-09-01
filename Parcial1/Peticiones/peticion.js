document.getElementById('btnBuscar').addEventListener('click', function() {
    const characterID = document.getElementById('inpID').value;//obtiene el valor del input
    const apiURL = `https://rickandmortyapi.com/api/character/${characterID}`; // URL de la api con el id que se ingreso

    fetch(apiURL) //petición a la API
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el personaje');
            }
            return response.json();
        })
        .then(data => {
            // aqui se muestra la información en el HTML
            document.getElementById('characterName').innerText = data.name;
            document.getElementById('characterImage').src = data.image;
        })
        .catch(error => {
            document.getElementById('characterName').innerText = 'Error: ' + error.message;
            document.getElementById('characterImage').src = '';
        });
});
document.getElementById('btnLimpiar').addEventListener('click', function() {
    document.getElementById('inpID').value = '';
    document.getElementById('characterName').innerText = '';
    document.getElementById('characterImage').src = '';
});