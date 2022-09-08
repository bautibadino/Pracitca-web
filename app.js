const botonContenedor = document.querySelector('#icono-animacion');
const contenedorSidebar = document.querySelector ('.contenedor')



//Event listeners
eventListeners();
function eventListeners(){
    botonContenedor.addEventListener('click', desplazarBarra)
}

function desplazarBarra (e){
    e.preventDefault();

    contenedorSidebar.style.width = '100px'

    if(contenedorSidebar.style.width === '100px'){
        console.log('300px')
    } else{

    }


}