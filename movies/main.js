        
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
  
    function deleteCookies() {
        document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "edad=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  
    window.onload = function() {
        const sesion = getCookie('sesion');
        const nombre = getCookie('nombre');
        const edad = getCookie('edad');

  
  
        if (!sesion || !nombre || !edad) {
            window.location.href = '../login';
            
           
  
        } else {
            verificarPin();
        }
    };
  
  
    function cerrarSesion() {
        deleteCookies();
        window.location.href = '../login';
    }

    async function verificarPin() {
    const body = document.body;
    const sesion = getCookie('sesion');
    
    // Decode the session cookie instead of encoding it
    const sesionDecoded = atob(sesion); // Change this line

    try {
        const response = await fetch('https://cdn-jdev.github.io/jflix/pins/');
        const data = await response.json();
        
        if (data.pins.includes(sesionDecoded)) {
            body.style.display = 'block';
            console.log('sesion verify passed');
        } else {
            body.style.display = 'none';
            window.location.href = '../login';
            document.getElementById('movie-title').innerText = "Error";
            document.getElementById('movie-description').innerText = "No has iniciado sesión.";
            console.log('no sesion');
            console.log('Si ves esto, llama al soporte técnico y diles que el ID del error es: 2no-sesion');
        }
    } catch (error) {
        console.error('Error al verificar PIN:', error);
        console.log('pin verify error');
        document.getElementById('movie-title').innerText = "Error";
        document.getElementById('movie-description').innerText = "No se pudo verificar tu sesión.";
        console.log('Si ves esto, llama al soporte técnico y diles que el ID del error es: 3verify-error-sync');
    }
}

	
const playButton = document.getElementById('play-button');

        const apiKey = '26750a2fb7d61fdec546f4df7c4ad631'; // Reemplaza con tu clave de API

        // Función para obtener el valor de los parámetros de la URL
        function getUrlParams() {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(window.location.search);
            // Quitar parámetro id de la URL
            url.searchParams.delete('mId');
            url.searchParams.delete('mLink');
            url.searchParams.delete('documental');
    window.history.pushState({}, '', url.href);
            return {
                movieId: params.get('mId'),
                movieLink: params.get('mLink'),
                documental: params.get('documental')
            };
        }
        const { movieId, movieLink, documental } = getUrlParams(); // Obtiene los parámetros desde la URL

    // Redirige si hay un parámetro 'documental'
    if (documental) {
        window.location.href = `../assets/jflix/player/reproductor.html?documental=${documental}`;
    } else if (!movieId || !movieLink) {
            document.getElementById('movie-title').innerText = "Error";
            document.getElementById('movie-description').innerText = "No se proporcionó un ID de película.";
            document.getElementById('movie-container').style.backgroundImage = `url('../assets/jflix/img/j-flix-back.jpg')`;
            playButton.style.display = 'none';
            document.title = "Juan Flix+ | Error";
        } else {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ES`;

            // Realiza la solicitud a la API
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Error en la solicitud: ${res.status}`);
                    }
                    return res.json(); // Convierte la respuesta a JSON
                })
                .then(json => {
                    // Actualiza el contenedor con los datos de la película
                    document.title = `Juan Flix+ | "${json.title}"`;
                    document.getElementById('movie-title').innerText = json.title;
                    document.getElementById('movie-description').innerText = json.overview;

                    // Cambia la imagen de fondo del contenedor
                    document.getElementById('movie-container').style.backgroundImage = `url('https://image.tmdb.org/t/p/original${json.backdrop_path}')`;

                    // Configura el enlace del botón "Reproducir"
                    
                    if (movieLink) {
                        playButton.onclick = () => {
                            window.location.href = `../assets/jflix/player/reproductor.html?mId=${movieId}&mLink=${movieLink}`; // Redirige al enlace proporcionado
                        };
                    } else {
                        playButton.style.display = 'none';
                        playButton.onclick = () => {
                            alert("No se proporcionó un enlace para reproducir la película.");
                        };
                    }
                })
                .catch(err => {
                    console.error('Error al realizar la solicitud:', err);
                    document.getElementById('movie-title').innerText = "Error";
                    document.getElementById('movie-description').innerText = "No se pudo cargar la información de la película.";
                });
        }