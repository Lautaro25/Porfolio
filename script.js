let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Si se desplaza hacia abajo
        header.classList.add('hidden');
        header.classList.remove('scrolled-up');
    } else {
        // Si se desplaza hacia arriba
        header.classList.remove('hidden');
        header.classList.add('scrolled-up');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});

// La posición en la que quieres que ocurra algo
const triggerPosition = 100; // Cambia este valor según tus necesidades

// Función para comprobar la posición del header
function checkHeaderPosition() {
    // Obtiene la posición del header en relación con el viewport
    const headerPosition = window.scrollY;

    // Verifica si el header ha pasado la posición desencadenante
    if (headerPosition >= triggerPosition) {
        // Cambia el fondo del header o realiza otra acción
        header.style.backgroundColor = '#000'; // Cambia el color de fondo
    } else {
        // Restaura el fondo del header o realiza otra acción
        header.style.backgroundColor = '#000'; // Color original
    }
}

// Escucha el evento de scroll
window.addEventListener('scroll', checkHeaderPosition);

    document.querySelector('.form').addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Aquí puedes agregar código para mostrar un mensaje de éxito
        alert('Formulario enviado con éxito.');

        // Enviar el formulario usando Formspree
        this.submit();
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del formulario
        event.preventDefault();

        // Aquí puedes agregar código para mostrar un mensaje de éxito, si deseas
        alert('Formulario enviado con éxito.');

        // Enviar el formulario usando Formspree
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Limpia los campos del formulario después del envío exitoso
                this.reset();
            } else {
                // Muestra un mensaje de error si el envío falla
                alert('Hubo un problema al enviar el formulario.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar el formulario.');
        });
    });


    //Certificados
    function toggleImageSize(img) {
        // Remover la clase activa de todas las imágenes por si acaso hay una ya activa
        document.querySelectorAll('.div-cert img').forEach(el => el.classList.remove('active'));
    
        // Agregar la clase activa solo a la imagen clicada
        img.classList.add('active');
    
        // Después de 3 segundos (3000ms), quitar la clase activa
        setTimeout(() => {
            img.classList.remove('active');
        }, 3000); // Aquí puedes ajustar el tiempo según lo que necesites
    }
    
    