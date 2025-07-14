const URL = 'https://dabicho88.github.io/fundacioncarter/js/catalogofstreetdogs.json';
//const URL = 'js/catalogofstreetdogs.json';
const contenedorPrincipal = document.querySelector('.tuSeleccion');
let foto;
let nombre;
let tamanno;
let color;
let pelaje;
let edad;
let ciudad;
let favorito;
let numHeart = 0;
let jsonEnStorage;
class Perro{
    constructor(foto, nombre, tamanno, color, pelaje, edad, ciudad){
        this.foto = foto;
        this.nombre = nombre;
        this.tamanno = tamanno;
        this.color = color;
        this.pelaje = pelaje;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

function comienzaPeticion(){
    fetch(URL)
        .then((laData) => laData.json())
        .then((losDatos) => {
            generaFichas(losDatos);
            leerFavoritos(losDatos, jsonEnStorage);
        });
}

function generaFichas(allData){
    allData.forEach(oneDog => {
        everycard = document.createElement('div');
        everycard.classList.add('everycard'); 
        numHeart++;
        everycard.innerHTML = `            
            <div class="picCard"><span class="outfit-2">${oneDog.nombre}</span> <img src="${oneDog.foto}"> </div>
            <div class="vueltaCard">
                <div class="bulletCard">Mi nombre es: <span class="titleCard">${oneDog.nombre}</span></div>
                <div class="bulletCard">Tamaño: <span class="titleCard">${oneDog.size}</span></div>
                <div class="bulletCard">Color: <span class="titleCard">${oneDog.color}</span></div>
                <div class="bulletCard">Mi pelaje es: <span class="titleCard">${oneDog.pelaje}</span></div>
                <div class="bulletCard">Tengo: <span class="titleCard">${oneDog.edad} años</span></div>
                <div class="bulletCard">Localidad: <span class="titleCard">${oneDog.ciudad}</span></div>
                <div class="heart" id="favorito${numHeart}" onclick="saveFavorito(this)">♥</div>
            </div>
        `;
        contenedorPrincipal.insertAdjacentElement('beforeend', everycard);
    });
}

function saveFavorito(corasao){
    let idFavorito = corasao.getAttribute('id');
    favorito = new Perro(
            corasao.parentNode.previousElementSibling.children[1].getAttribute('src'),
            corasao.parentNode.children[0].children[0].innerHTML,
            corasao.parentNode.children[1].children[0].innerHTML,
            corasao.parentNode.children[2].children[0].innerHTML,
            corasao.parentNode.children[3].children[0].innerHTML,
            corasao.parentNode.children[4].children[0].innerHTML,
            corasao.parentNode.children[5].children[0].innerHTML
        );
    //Almacenando en local storage
    localStorage.setItem(idFavorito, JSON.stringify(favorito));
    let objecObtenido = JSON.parse(localStorage.getItem("'"+idFavorito+"'"));
    console.log(objecObtenido);
}

function leerFavoritos(){
    for(yson=0;yson<localStorage.key.length;yson++){
        console.log(localStorage.key[yson]);
    }
}


comienzaPeticion();



























