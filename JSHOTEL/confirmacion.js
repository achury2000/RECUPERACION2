function confirmReservation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');

    confirmationDetails.innerHTML = `
        Nombre: ${name}<br>
        Correo Electrónico: ${email}<br>
        Teléfono: ${phone}<br>
        Fecha de Entrada: ${date}<br>
        Hora de Entrada: ${time}<br>
        Número de Personas: ${guests}
    `;

    confirmationMessage.style.display = 'block';
}