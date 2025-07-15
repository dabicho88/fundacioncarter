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
        });
}

function generaFichas(allData){
    allData.forEach(oneDog => {
        everycard = document.createElement('div');
        everycard.classList.add('everycard'); 
        numHeart++;
        everycard.innerHTML = `   
            <div class="heart" id="favorito${numHeart}" onclick="saveFavorito(this)">♥</div>         
            <div class="picCard"><span class="outfit-2">${oneDog.nombre}</span> <img src="${oneDog.foto}"> </div>
            <div class="vueltaCard">
                <div class="bulletCard">Mi nombre es: <span class="titleCard">${oneDog.nombre}</span></div>
                <div class="bulletCard">Tamaño: <span class="titleCard">${oneDog.size}</span></div>
                <div class="bulletCard">Color: <span class="titleCard">${oneDog.color}</span></div>
                <div class="bulletCard">Mi pelaje es: <span class="titleCard">${oneDog.pelaje}</span></div>
                <div class="bulletCard">Tengo: <span class="titleCard">${oneDog.edad} años</span></div>
                <div class="bulletCard">Localidad: <span class="titleCard">${oneDog.ciudad}</span></div>
            </div>
        `;
        contenedorPrincipal.insertAdjacentElement('beforeend', everycard);
        //Encontrando en Local Storage y pinta corazon si existe
        encontrarStorage(numHeart);
    });

}

function saveFavorito(corasao){
    //Obtiene el id de heart
    let idFavorito = corasao.getAttribute('id');
    //Favorito ON OF con el corazon
    if(corasao.classList.contains('actived') !== true){
        corasao.classList.add('actived');
        document.querySelector('.bigHeart').classList.add('animaHeart');
        setTimeout(() =>{
            document.querySelector('.bigHeart').classList.remove('animaHeart')
        },800)
        //Genera un objeto con la clase Perro y Almacena favorito en Local
        favorito = new Perro(
                corasao.nextElementSibling.children[1].getAttribute('src'),
                corasao.nextElementSibling.nextElementSibling.children[0].children[0].innerHTML,
                corasao.nextElementSibling.nextElementSibling.children[1].children[0].innerHTML,
                corasao.nextElementSibling.nextElementSibling.children[2].children[0].innerHTML,
                corasao.nextElementSibling.nextElementSibling.children[3].children[0].innerHTML,
                corasao.nextElementSibling.nextElementSibling.children[4].children[0].innerHTML,
                corasao.nextElementSibling.nextElementSibling.children[5].children[0].innerHTML
            );
    localStorage.setItem(idFavorito, JSON.stringify(favorito));
    }
    else if(corasao.classList.contains('actived') == true){
        corasao.classList.remove('actived');
        localStorage.removeItem(idFavorito);
    }
}

function encontrarStorage(idNumerico){
    for(f=0;f<localStorage.length;f++){
        if(localStorage.key(f) == 'favorito'+idNumerico){
            document.querySelector('#'+localStorage.key(f)).classList.add('actived');
        }
    }
}

comienzaPeticion();



























