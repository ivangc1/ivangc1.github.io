document.addEventListener('DOMContentLoaded', () => {
    const paredes = document.querySelectorAll('.pared');
    const fin = document.getElementById('fin');

    paredes.forEach(pared => {
        pared.addEventListener('mouseover', perder);
    });

    fin.addEventListener('mouseover', ganar);

    function perder() {
        alert('¡Has perdido!');
        // Aquí puedes añadir cualquier otra lógica que quieras ejecutar cuando el jugador pierde
    }

    function ganar() {
        alert('¡Has ganado!');
        // Aquí puedes añadir cualquier otra lógica que quieras ejecutar cuando el jugador gana
    }
});
