function shareLocation() {
    // Aquí puede implementar la funcionalidad para compartir la ubicación
    alert('Compartir ubicación');
}

function previewFile() {
    const file = document.getElementById('file-input').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        // Aquí puede implementar la funcionalidad para previsualizar o subir la imagen
        alert('Imagen seleccionada: ' + reader.result);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}
