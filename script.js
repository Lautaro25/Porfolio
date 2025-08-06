
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

// Modal
const projectData = {
    alquiler: {
        title: 'Alquiler Canchas (Sistema Web)',
        github: 'https://github.com/Lautaro25/Sistema-Web',
        images: [
            'IMG/proyectos/Sistema Web/image22.png',
            'IMG/proyectos/Sistema Web/image6.png',
            'IMG/proyectos/Sistema Web/image2.png',
            'IMG/proyectos/Sistema Web/image21.png',
            'IMG/proyectos/Sistema Web/image14.png',
            'IMG/proyectos/Sistema Web/image7.png',
            'IMG/proyectos/Sistema Web/image10.png',
            'IMG/proyectos/Sistema Web/image5.png'
        ]
    },
    gestion: {
        title: 'Gestión Intituto de Ingles (App Movile)',
        github: 'https://github.com/Lautaro25/App-Gestion-Instituto',
        images: [
            'IMG/proyectos/B4A/IMG-20250731-WA0031.jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0030.jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0029.jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0028.jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0027.jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0026.jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0025jpg',
            'IMG/proyectos/B4A/IMG-20250731-WA0026.jpg'
        ]
    },
    proveedor: {
        title: 'Gestión Cliente-Proveedor (App de Escritorio)',
        github: 'https://github.com/Lautaro25/Gestion-Pedidos-y-Proveedores-C-',
        images: [
            'IMG/proyectos/C/c1.png',
            'IMG/proyectos/C/c2.png',
            'IMG/proyectos/C/c3.png',
            'IMG/proyectos/C/c4.png',
            'IMG/proyectos/C/c5.png',
            'IMG/proyectos/C/c6.png',
            'IMG/proyectos/C/c7.png',
            'IMG/proyectos/C/c8.png'
        ]
    }
};

function openModal(projectId) {
    const modal = document.getElementById('myModal');
    const title = modal.querySelector('.h2-proyect');
    const carousel = modal.querySelector('.carousel-track');
    const githubLink = modal.querySelector('.modal-content a');

    const data = projectData[projectId];

    if (!data) return;

    title.textContent = data.title;
    githubLink.href = data.github;

    // Limpiar el carrusel y agregar nuevas imágenes
    carousel.innerHTML = '';
    data.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        carousel.appendChild(img);
    });

    // ❗ Volver a seleccionar las imágenes ahora que están en el DOM
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function updateCarousel() {
        const width = images[0].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    // Agregar los event listeners a los botones de navegación
    const prev = modal.querySelector('.prev');
    const next = modal.querySelector('.next');

    prev.onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    };

    next.onclick = () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    };

    window.addEventListener('resize', updateCarousel);

    // Mostrar modal y posicionar en la primera imagen
    updateCarousel();
    modal.classList.add('show');
}



    document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementById('closeModal');

    closeModal.addEventListener('click', () => {
        // Para hacer el fade out
        modal.classList.remove('show');

        // Luego, opcionalmente, si querés quitarlo del flujo después de la animación, podés esperar:
        setTimeout(() => {
        // Aquí podrías poner alguna acción cuando terminó el fade out, si es necesario
        }, 500); // debe coincidir con la duración de la transición en CSS (0.5s)
    });
    });

//Carrusel
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex = 0;

    function updateCarousel() {
        const width = images[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    next.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
        }
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);


//Carrusel para cursos
const divCert = document.querySelector('.div-cert');
const prevButton = document.querySelector('.prevv');
const nextButton = document.querySelector('.nextt');

// Mover el carrusel hacia la izquierda
prevButton.addEventListener('click', () => {
    divCert.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

// Mover el carrusel hacia la derecha
nextButton.addEventListener('click', () => {
    divCert.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

// Ampliar imagen al hacer clic
function toggleImageSize(img) {
    const zoomOverlay = document.querySelector('.zoom-overlay');
    const zoomedImg = document.getElementById('zoomed-img');

    zoomedImg.src = img.src;

    // Forzar recálculo para activar transición
    zoomOverlay.classList.remove('visible');
    void zoomOverlay.offsetWidth; // Hack para reiniciar animación

    zoomOverlay.classList.add('visible');
}

function closeZoom() {
    const zoomOverlay = document.querySelector('.zoom-overlay');
    zoomOverlay.classList.remove('visible');
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeZoom();
    }
});



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





