function datos(Datos) {
    var nombre= prompt ('Nombre')
    var mensaje = 'Nombre'

    var edad= prompt ('Edad')
    console.log("Edad")

    var profesion= prompt ('Profesion')
    console.log("Profesion")

    var trabajos= prompt ('Trabajos')
    console.log("Trabajos")

    document.getElementById('name').innerText = document.getElementById('name').innerText+nombre;
    document.getElementById('age').innerText = document.getElementById('age').innerText+nombre;
    document.getElementById('work').innerText = document.getElementById('work').innerText+nombre;
    document.getElementById('play').innerText = document.getElementById('play').innerText+nombre;
}

