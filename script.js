let juegoIniciado = false;

document.addEventListener('DOMContentLoaded', () => {
    const inicio = document.getElementById('inicio');
    const paredes = document.querySelectorAll('.pared');
    const fin = document.getElementById('fin');

    inicio.addEventListener('click', () => {
        juegoIniciado = true;
        inicio.style.backgroundColor = '#ddd'; // Cambia el color para indicar que el juego ha comenzado
    });

    paredes.forEach(pared => {
        pared.addEventListener('mouseover', () => {
            if (juegoIniciado) perder();
        });
    });

    fin.addEventListener('mouseover', () => {
        if (juegoIniciado) ganar();
    });

    function perder() {
        alert('¡Has perdido!');
        juegoIniciado = false;
        inicio.style.backgroundColor = '#00ff00'; // Restablece el color del inicio
    }

    function ganar() {
        alert('¡Has ganado!');
        juegoIniciado = false;
        inicio.style.backgroundColor = '#00ff00'; // Restablece el color del inicio
    }
});
