
const contenedorPrincipal = document.querySelector('.tuSeleccion');
let divFavorito;
let keyStorage;
let objetoAJson;
let chHeart;
let elpapaEveryCard;
let usuarioReconocido;
const botonRegistro = document.querySelector('[href="registro.html"]');
let confirmacionMail = document.createElement('div');

function obtenerStorageFavoritos(){
	for(d=0;d<localStorage.length;d++){
        keyStorage = localStorage.key(d);
        if(keyStorage.includes('favorito') == true){
            divFavorito = document.createElement('div');
            divFavorito.classList.add('everycard');
            objetoAJson = JSON.parse(localStorage.getItem(keyStorage));
            divFavorito.innerHTML = `
                <a href="registro.html" class="linksRegistro"></a>   
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
                <div class="correoSobre invisibol" onclick="mandaMail('${objetoAJson.nombre}');"></div>
            `;  
            contenedorPrincipal.insertAdjacentElement('beforeend', divFavorito);
        }
    }
    mensajeFavoritosVacio(divFavorito);
}



function eliminarConClick(corasao){
    //Obtiene el id de heart y al star en favoritos, si le da click el usuario, desaparece del local
    let idFavorito = corasao.getAttribute('id');
    localStorage.removeItem(idFavorito);
    chHeart = document.querySelector('#'+ idFavorito);
    elpapaEveryCard = chHeart.parentNode;
    elpapaEveryCard.classList.add('fadeit');
    setTimeout(()=>{
        elpapaEveryCard.parentNode.removeChild(elpapaEveryCard);
        mensajeFavoritosVacio(document.querySelector('.everycard'));
    },1000);
}


function mensajeFavoritosVacio(elEvery){
	if(elEvery == null){
		contenedorPrincipal.innerHTML += '<div class="emptyFavo outfit-1">No tienes ningún Carter favorito <a href="index.html" class="outfit-2">Ve a enamorarte</a><img src="img/emptyCarter.png"> </div>';
	}
}


obtenerStorageFavoritos();

function mandaMail(nombreCarter){
    confirmacionMail.innerHTML = `
            <div>
                <h2 class="titleSecundario">En breve una fundación encargada de <strong>${nombreCarter}</strong> se pondrá en contacto contigo.</h2>
                <h2 class="titlePrimario">Gracia por tu interés</h2>
            </div>
    `;
    confirmacionMail.classList.add('visibleTime', 'confirmacionMail');
    contenedorPrincipal.insertAdjacentElement('beforeend', confirmacionMail);
    setTimeout(()=>{
     confirmacionMail.parentNode.removeChild(confirmacionMail);   
    }, 4500);
}


function reconocer(){
    for(us=0;us<localStorage.length;us++){
        if(localStorage.key(us).includes('usuario') === true){
            usuarioReconocido = localStorage.getItem(localStorage.key(us));
            botonRegistro.parentNode.removeChild(botonRegistro);
            document.querySelector('header').innerHTML += `
                <a class="partmenu">Hola, ${usuarioReconocido}</a>
            `;
            document.querySelector('h3').innerHTML = '';
            let sobres = document.querySelectorAll('.correoSobre');
            for(let sobre of sobres){
                sobre.classList.remove('invisibol');   
            };
            let linksARegistro = document.querySelectorAll('.linksRegistro');
            for(let linkRegis of linksARegistro){
                linkRegis.classList.add('invisibol');   
            };
        }
    }
}



reconocer();























