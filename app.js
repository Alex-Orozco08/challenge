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



//Funcion para seleccionar un amigo aleatorio