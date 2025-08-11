// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista para guardar los nombres
let listaNombres = [];

//Función para agregar un amigo

function agregarAmigo () {
    let input = document.getElementById('amigo');
    let nombre = input.value;

//Validar si el campo está vacio o contiene solo espacios
    if (nombre === '' ) {
    alert('Por favor, inserte un nombre válido.');
    return;
}
    if (nombre === ' ') {
    alert('No puedes ingresar solo un espacio.');
    return;
}

listaNombres.push(nombre);
input.value = '';
input.focus(); 
//el input.focus devuelve el cursor al campo de texto

mostrarLista();
}

//Función para mostrar lista de amigos en pantalla
function mostrarLista() { 
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaNombres.length; i++){
        let li = document.createElement('li');
        li.textContent = listaNombres[i];
        lista.appendChild(li);
    }
}

//Función para sortear un amigo 
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert('Agrega al menos un nombre antes de hacer el sorte.');
        return;
    }

    let indiceGanador = Math.floor(Math.random() * listaNombres.length);
    let ganador = listaNombres[indiceGanador];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    resultado.innerHTML = '<li>El amigo secreto es: '+ ganador + '</li>';
}