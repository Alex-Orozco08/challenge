// array para almacenar los nombres
let amigos = [];

//Funcion para agregar amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    //Que no se introduzcan caracteres vacios
    if (nombre == ""){
        alert("Por favor, inserte un nombre. ")
        return;
    }
    //nombre duplicados
    if (amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    
    }
    amigos.push(nombreAmigo);
    inputAmigo.ariaValu = "";
    actualizarLista();
}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('ListaAmigos');

    listaAmigos.innerHTML = "";

    for (let i=0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
} 


//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    if(amigos.length == 0){
        alert("NO hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSortedo = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSortedo}</strong>`;
}