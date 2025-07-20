let inputEmail = document.querySelector('[type="text"]');
let botonEnviar = document.querySelector('.botonEnviar');
const contRegistro = document.querySelector('.registroCarters');
let errorCito = document.querySelector('.errorcito');
let errorCito2 = document.querySelector('.errorcito2');
let arrayUser = [];
let usuarioReconocido;
const botonRegistro = document.querySelector('[href="registro.html"]');

function validando(){
    errorCito.classList.remove('invisibol');
    if(inputEmail.value.toString().includes('@') && inputEmail.value.toString().includes('.com')){
        botonEnviar.classList.remove('invisibol');
        errorCito.classList.add('invisibol');
    }
    else{
         botonEnviar.classList.add('invisibol');
         errorCito.classList.remove('invisibol'); 
    }
}

function registro(){
    for(ki=0;ki<localStorage.length;ki++){
            let laski = localStorage.key(ki)
         if(localStorage.getItem(laski) === inputEmail.value){
                errorCito2.classList.remove('invisibol');
            setTimeout(() => {
                errorCito2.classList.add('invisibol');
            },1500);
        }
        else if(localStorage.getItem(laski) !== inputEmail.value){
            if(laski.includes('usuario')){
                arrayUser.push(laski);
            }
        }
    }
    localStorage.setItem('usuario'+arrayUser.length, inputEmail.value);
    arrayUser = [];
    document.querySelector('[href="index.html"]').click(); 
}












