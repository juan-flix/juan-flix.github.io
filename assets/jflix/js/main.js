          
          const body = document.body
   
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
        const sesion = getCookie('sesion');
        const sesionDecoded = atob(sesion);
        const nombre = getCookie('nombre');
        const edad = getCookie('edad');
       

        try {
            const response = await fetch('https://cdn-jdev.github.io/jflix/pins/');
            const data = await response.json();
            
            if (data.pins.includes(sesionDecoded)) {
                 body.style.display = 'block'
            } else {
                body.style.display = 'none'
              window.location = '../login'
            }
        } catch (error) {
          console.error('Error al verificar PIN:', error);
			 window.location = '../login'
        }
    }

 
	
	document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('.header');
	const netflixIntro = document.querySelector('.netflix-intro');

	const moviesData = {
		avaliables: [
			{ title: 'Loca por las compras', image: 'poster-lpc.jpeg', link: 'mId=20048&mLink=ver-loca-por-las-compras', id: '20048'},
{ title: 'Mi villano favorito 4', image: 'poster-mvf4.jpeg', link: 'mId=519182&mLink=ver-mi-villano-favorito-4', id: '519182'},
{ title: 'UP: Una aventura en las alturas', image: 'poster-up.jpeg', link: 'mId=14160&mLink=ver-up', id: '14160' },
{ title: 'Un vecino gruñón', image: 'poster-uvg.jpeg', link: 'mId=937278&mLink=ver-un-vecino-gru%C3%B1%C3%B3n', id: '937278'},
{ title: 'Planeta de los simios: Evolución', image: 'poster-pdls1.webp', link: 'mId=61791&mLink=ver-planeta-de-los-simios1', id: '61791'},
{ title: 'Planeta de los simios: Confrontación', image: 'poster-pdls2.jpg', link: 'mId=119450&mLink=ver-planeta-de-los-simios2', id: '119450'},
{ title: 'Planeta de los simios: La guerra', image: 'poster-pdls3.jpg', link: 'mId=281338&mLink=ver-planeta-de-los-simios3', id: '281338'},
{ title: 'Planeta de los simios: Nuevo Reino', image: 'poster-pdls.jpeg', link: 'mId=653346&mLink=ver-planeta-de-los-simios4', id: '653346'},
{ title: 'Daniel el Travieso', image: 'poster-det.jpeg', link: 'mId=45242&mLink=ver-daniel-el-travieso', id: '45242'},
{ title: 'Los pinguinos de papá', image: 'poster-lpdp.jpeg', link: 'mId=58224&mLink=play-movie-3r3434t44', id: '58224'},
{ title: 'IntensaMente 2', image: 'poster-im2.jpeg', link: 'mId=1022789&mLink=ver-intensamente-2', id: '1022789'},
{ title: 'Pollitos en Fuga 1', image: 'poster-pef1.jpeg', link: 'mId=7443&mLink=ver-pollitos-en-fuga-1', id: '7443'},
{ title: 'Pollitos en Fuga 2', image: 'poster-pef2.jpeg', link: 'mId=520758&mLink=ver-pollitos-en-fuga-2', id: '520758'},
{ title: 'Babe: el puerquito valiente', image: 'poster-bepv.jpeg', link: 'mId=9598&mLink=ver-babe-el-puerquito-valiente', id: '9598'},
{ title: 'Rio 2', image: 'poster-r1.jpeg', link: 'mId=172385&mLink=play-movie-r734ty48ty74y8', id: '172385'},
{ title: 'El rescate de Ruby', image: 'poster-erdr.jpeg', link: 'mId=921655&mLink=ver-el-rescate-de-ruby' , id: '921655' },
{ title: 'Como entrenar a tu dragon 1', image: 'poster-ceatd1.jpg', link: 'mId=10191&mLink=KYUT9ZQev2ZUpRCalugpmPDfuwdpqhohHH1TimrthqAPcs6cI45jygacbtuFw3wH' , id: '10191' },
{ title: 'Como entrenar a tu dragon 2', image: 'poster-ceatd2.jpeg', link: 'mId=82702&mLink=ubPrHz9uMjIgVXwu4FWcLuylGd1sGmjgl3iaseD49Uo3iPPQphZYJS3MRMVeWd9s' , id: '82702' },
{ title: 'Como entrenar a tu dragon 3', image: 'poster-ceatd3.jpeg', link: 'mId=166428&mLink=oIPwKPCmP28z7kFXAmrDfIZCjvKga0UA8R9I8dP2P7tOZQqleaGXTiAsH8pOE7vq' , id: '166428' },
{ title: 'Megamente 1', image: 'poster-m1.jpeg', link: 'mId=38055&mLink=sDGPe0Umg1Y53vz8KbhmRBw0GGGRk8BtBslOXKFyRg2ErQJpPjavprj5Cf82UvSi' , id: '38055' },
{ title: 'Megamente 2', image: 'poster-m2.jpeg', link: 'mId=1239251&mLink=70RuzQv2wfxVad82W0iTAOJliQc8ujy0k6wPVjzcK8mxdZX6rgbtIQk5XlWUE6Rh' , id: '1239251' },
{ title: 'Naufrago', image: 'poster-n.jpeg', link: 'mId=8358&mLink=ver-m-naufrago' , id: '8358' },
{ title: 'La era de hielo 1', image: 'poster-ledh1.jpeg', link: 'mId=425&mLink=ver-la-era-de-hielo-1' , id: '425' },
{ title: 'La era de hielo 2', image: 'poster-ledh2.jpeg', link: 'mId=950&mLink=ver-la-era-de-hielo-2' , id: '950' },
{ title: 'La era de hielo 3', image: 'poster-ledh3.jpeg', link: 'mId=8355&mLink=ver-la-era-de-hielo-3' , id: '8355' },
{ title: 'La era de hielo 4', image: 'poster-ledh4.jpeg', link: 'mId=57800&mLink=ver-la-era-de-hielo-4' , id: '57800' },
{ title: 'La era de hielo 5', image: 'poster-ledh5.jpeg', link: 'mId=278154&mLink=ver-la-era-de-hielo-5' , id: '278154' },
{ title: 'La Propuesta', image: 'poster-lp.jpeg', link: 'mId=18240&mLink=ver-la-propuesta' , id: '18240' },
{ title: 'Mis huellas a casa', image: 'poster-mhac.jpg', link: 'mId=508763&mLink=ver-mis-huellas-a-casa' , id: '508763' },
{ title: 'Mi pobre angelito 1', image: 'poster-mpa1.jpg', link: 'mId=771&mLink=ver-mi-pobre-angelito-1' , id: '771' },
{ title: 'Mi pobre angelito 2', image: 'poster-mpa2.jpeg', link: 'mId=772&mLink=ver-mi-pobre-angelito-2' , id: '772' },
{ title: 'Mi pobre angelito 3', image: 'poster-mpa3.jpeg', link: 'mId=9714&mLink=ver-mi-pobre-angelito-3' , id: '9714' },
{ title: 'El Joven Manos De Tijera', image: 'poster-ejmdt.jpg', link: 'mId=162&mLink=ver-el-joven-manos-de-tijeras' , id: '162' },
{ title: 'Paternidad', image: 'poster-p.jpeg', link: 'mId=607259&mLink=ver-paternidad' , id: '607259' },
{ title: 'Desconectados', image: 'poster-d.jpeg', link: 'mId=1062088&&mLink=ver-desconectados' , id: '1062088' },
{ title: 'Monsters Inc.', image:'poster-mi.jpg', link: 'mId=585&mLink=ver-monsters' , id: '585' },
{ title: 'Mini-espías: Armagedón', image: 'poster-mea.jpg', link: 'mId=790493&mLink=ver-mini-espias-armagedon', id: '790493' },
{ title: 'Robot Salvaje', image:'poster-rs.jpg', link:'mId=1184918&mLink=ver-robot-salvaje', id: '1184918' },
{ title: 'Garra', image: 'poster-gr.webp', link:'mId=705861&mLink=ver-garra', id: '705861' },

		],
		recents: [
            { title: 'Planeta de los simios: Evolución', image: 'poster-pdls1.webp', link: 'mId=61791&mLink=ver-planeta-de-los-simios1', id: '61791'},
            { title: 'Planeta de los simios: Confrontación', image: 'poster-pdls2.jpg', link: 'mId=119450&mLink=ver-planeta-de-los-simios2', id: '119450'},
            { title: 'Planeta de los simios: La guerra', image: 'poster-pdls3.jpg', link: 'mId=281338&mLink=ver-planeta-de-los-simios3', id: '281338'},
            { title: 'Planeta de los simios: Nuevo Reino', image: 'poster-pdls.jpeg', link: 'mId=653346&mLink=ver-planeta-de-los-simios4', id: '653346'},
            { title: 'Desconectados', image: 'poster-d.jpeg', link: 'mId=1062088&&mLink=ver-desconectados' , id: '1062088' },
            { title: 'Monsters Inc.', image:'poster-mi.jpg', link: 'mId=585&mLink=ver-monsters' , id: '585' },
            { title: 'Mini-espías: Armagedón', image: 'poster-mea.jpg', link: 'mId=790493&mLink=ver-mini-espias-armagedon', id: '790493' },
            { title: 'Robot Salvaje', image:'poster-rs.jpg', link:'mId=1184918&mLink=ver-robot-salvaje', id: '1184918' },
            { title: 'Garra', image: 'poster-gr.webp', link:'mId=705861&mLink=ver-garra', id: '705861' },
            

		],
		documental: [
			{ title: 'Rivalidades en el Imperio Salvaje', image: 'poster-d-reeis.jpg', link: 'documental=reeis', id: 'd-Rivalidades poderosas de clanes de leones, hienas y jaguares se enfretan cara a cara. ¿Quién es el más poderoso?'},
            { title: 'Hallazgo Asombroso: Pirámide Oculta', image: 'poster-d-hapo.jpg', link: 'documental=hapo', id: 'd-Albert Lin quedó impactado al descubrir pirámides en la antigua ciudad de El Palmar. ¿ A quiénes pertenecieron? ¿Qué sacrificios hacían?'},
		]
	};

	const categories = {
		avaliables: "Películas Disponibles",
		recents: "Recién Agregadas",
		documental: "Documentales"
	};


	

	if (!('ontouchstart' in window)) {
		document.querySelectorAll('.movies-row').forEach(row => {
			let isDown = false;
			let startX;
			let scrollLeft;

			row.addEventListener('mousedown', (e) => {
				isDown = true;
				row.style.cursor = 'grabbing';
				startX = e.pageX - row.offsetLeft;
				scrollLeft = row.scrollLeft;
			});

			row.addEventListener('mouseleave', () => {
				isDown = false;
				row.style.cursor = 'grab';
			});

			row.addEventListener('mouseup', () => {
				isDown = false;
				row.style.cursor = 'grab';
			});

			row.addEventListener('mousemove', (e) => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - row.offsetLeft;
				const walk = (x - startX) * 2;
				row.scrollLeft = scrollLeft - walk;
			});
		});
	}

	window.addEventListener('scroll', () => {
		const hero = document.querySelector('.hero');
		const scrolled = window.pageYOffset;
		hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
	});





    const apiKey = '26750a2fb7d61fdec546f4df7c4ad631'; 
    const cache = {};
    async function fetchSynopsis(movieId) {
        
        if (movieId.startsWith("d-")) {
            return movieId.slice(2); 
        }
    
        if (cache[movieId]) {
            return cache[movieId]; 
         }
    
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ES`;
    
        try {
            const response = await fetch(url);
            
           if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
    
            const data = await response.json();
            const synopsis = data.overview || 'Sinopsis no disponible'; 

            
            cache[movieId] = synopsis;
    
            return synopsis;
         } catch (error) {
            console.error('Error al obtener la sinopsis:', error);
            return 'Sinopsis no disponible'; 
        }
    }

async function displayMovies() {
    const entries = Object.entries(categories);
    
    for (let i = 0; i < entries.length; i++) {
        const key = entries[i][0];
        const title = entries[i][1];
        
        const movies = moviesData[key];
        const container = document.getElementById('moviesContainer');

        const section = document.createElement('section');
        section.className = 'category';
        section.innerHTML = `<h2>${title}</h2><div class="movies-row"></div>`;
        
        const moviesRow = section.querySelector('.movies-row');

       
        const synopsesPromises = movies.map(movie => fetchSynopsis(movie.id));
        const synopses = await Promise.all(synopsesPromises);

        movies.forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <a href="../movies/movie.html?${movie.link}" target="_blank">
                    <img alt="Poster de ${movie.title}" src="../assets/jflix/img/${movie.image}" width="200" height="300">
                    <div class="movie-info">
                        <h3 style="color: #fff;">${movie.title}</h3>
                        <p style="color: #fff;" class="description">${synopses[index]}</p> 
                    </div>
                </a>
            `;
            moviesRow.appendChild(movieCard);
        });

        container.appendChild(section);
    }
}

displayMovies();

});