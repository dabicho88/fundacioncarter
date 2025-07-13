const URL = 'https://i5.walmartimages.com/dfw/4ff9c6c9-ccd3/k2-_71d75f0a-fcaa-4eab-9cc2-9aba95fdcda9.v1.json';
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

