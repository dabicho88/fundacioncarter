const URL = 'https://dabicho88.github.io/fundacioncarter/js/catalogofstreetdogs.json';
const contenedorPrincipal = document.querySelector('.tuSeleccion');
let everycard = document.createElement('div');
    everycard.classList.add('everycard');

function comienzaPeticion(){
    fetch(URL)
        .then((laData) => laData.json())
        .then((losDatos) => {
            generaFichas(losDatos);
        });
}

function generaFichas(allData){
    allData.forEach(oneDog => {
        
    });
}

comienzaPeticion();

