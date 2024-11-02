// script.js

// Scroll a la galería de vehículos
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Función para abrir el formulario de reservación con el modelo seleccionado
function openReservationForm(vehicleModel) {
    document.getElementById('vehicle').value = vehicleModel;
    document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
}

// Enviar formulario de reservación
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservación enviada con éxito para ' + document.getElementById('vehicle').value);
    // Aquí podrías validar y enviar los datos a un backend para procesar la reservación
});
