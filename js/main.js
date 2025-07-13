const URL = '.js/catalogofstreetdogs.json';
const contenedorPrincipal = document.querySelector('.tuSeleccion');


function comienzaPeticion(){
    fetch(URL)
        .then((laData) => laData.json())
        .then((losDatos) => {
            generaFichas(losDatos);
        });
}

function generaFichas(allData){
    allData.forEach(oneDog => {
        let del1al4 = Math.floor(Math.random()* 4 + 1);
        const everycard = document.createElement('div');
        everycard.classList.add('everycard');  
        everycard.innerHTML = `            
            <div class="picCard"><span class="outfit-2">${oneDog.nombre}</span> <img src="img/carter${oneDog.color == 'Blanco' ? 'White' : (oneDog.color == 'Negro' ? 'Black' : (oneDog.color == 'Miel' ? 'Beige' : (oneDog.color == 'Mixto' ? 'Mixto' : 'noexiste')))}${del1al4}.jpg"> </div>
            <div class="vueltaCard">
                <div class="bulletCard">Mi nombre es: <span class="titleCard">${oneDog.nombre}</span></div>
                <div class="bulletCard">Tamaño: <span class="titleCard">${oneDog.size}</span></div>
                <div class="bulletCard">Color: <span class="titleCard">${oneDog.color}</span></div>
                <div class="bulletCard">Mi pelaje es: <span class="titleCard">${oneDog.pelaje}</span></div>
                <div class="bulletCard">Tengo: <span class="titleCard">${oneDog.edad} años</span></div>
                <div class="bulletCard">Localidad: <span class="titleCard">${oneDog.ciudad}</span></div>
                <div class="heart">♥</div>
            </div>
        `;
        contenedorPrincipal.insertAdjacentElement('beforeend', everycard);
    });
}



comienzaPeticion();

