
const contenedorPrincipal = document.querySelector('.tuSeleccion');
let divFavorito;
let keyStorage;
let objetoAJson;
let chHeart;
let elpapaEveryCard;

function obtenerStorageFavoritos(){
	for(d=0;d<localStorage.length;d++){
        divFavorito = document.createElement('div');
        divFavorito.classList.add('everycard'); 
        keyStorage = localStorage.key(d);
        objetoAJson = JSON.parse(localStorage.getItem(keyStorage));
        divFavorito.innerHTML = `   
            <div class="heart actived" id="${localStorage.key(d)}" onclick="eliminarConClick(this)"></div>         
            <div class="picCard"><span class="outfit-2">${objetoAJson.nombre}</span> <img src="${objetoAJson.foto}"> </div>
            <div class="vueltaCard">
                <div class="bulletCard">Mi nombre es: <span class="titleCard">${objetoAJson.nombre}</span></div>
                <div class="bulletCard">Tamaño: <span class="titleCard">${objetoAJson.tamanno}</span></div>
                <div class="bulletCard">Color: <span class="titleCard">${objetoAJson.color}</span></div>
                <div class="bulletCard">Mi pelaje es: <span class="titleCard">${objetoAJson.pelaje}</span></div>
                <div class="bulletCard">Tengo: <span class="titleCard">${objetoAJson.edad} </span></div>
                <div class="bulletCard">Localidad: <span class="titleCard">${objetoAJson.ciudad}</span></div>
            </div>
        `;  
        contenedorPrincipal.insertAdjacentElement('beforeend', divFavorito);
    }
    mensajeFavoritosVacio(divFavorito);
}



function eliminarConClick(corasao){
    //Obtiene el id de heart y al star en favoritos, si le da click el usuario, desaparece del local
    let idFavorito = corasao.getAttribute('id');
    localStorage.removeItem(idFavorito);
    chHeart = document.querySelector('#'+ idFavorito);
    elpapaEveryCard = chHeart.parentNode;
    elpapaEveryCard.parentNode.removeChild(elpapaEveryCard);
    setTimeout(mensajeFavoritosVacio(elpapaEveryCard),1000);
}


function mensajeFavoritosVacio(elEvery){
	if(elEvery == null){
		contenedorPrincipal.innerHTML += '<div class="emptyFavo outfit-1">No tienes ningún Carter favorito <a href="index.html" class="outfit-2">Ve a enamorarte</a><img src="img/emptyCarter.png"> </div>';
	}
}


obtenerStorageFavoritos();























