const URL = 'js/catalogofstreetdogs.json';
const contenedorPrincipal = document.querySelector('.tuSeleccion');


function comienzaPeticion(){
    fetch(URL)
        .then((laData) => laData.json())
        .then((losDatos) => {
            generaFichas(losDatos);
        });
}

function generaFichas(allData){
    //allData.forEach(oneDog => console.log(oneDog));
    console.log(allData)
}

comienzaPeticion();

