document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('.header');
	const netflixIntro = document.querySelector('.netflix-intro');

	const moviesData = {
		avaliables: [
		{ title: 'Loca por las compras', image: 'poster-lpc.jpeg', link: 'mId=20048&mLink=ver-loca-por-las-compras' },
{ title: 'Mi villano favorito 4', image: 'poster-mvf4.jpeg', link: 'mId=519182&mLink=ver-mi-villano-favorito-4' },
{ title: 'UP: Una aventura en las alturas', image: 'poster-up.jpeg', link: 'mId=14160&mLink=ver-up' },
{ title: 'Un vecino gruñón', image: 'poster-uvg.jpeg', link: 'mId=937278&mLink=ver-un-vecino-gru%C3%B1%C3%B3n' },
{ title: 'Planeta de los simios: Nuevo Reino', image: 'poster-pdls.jpeg', link: 'mId=653346&mLink=ver-planeta-de-los-simios' },
{ title: 'Daniel el Travieso', image: 'poster-det.jpeg', link: 'mId=45242&mLink=ver-daniel-el-travieso' },
{ title: 'Los pinguinos de papá', image: 'poster-lpdp.jpeg', link: 'mId=58224&mLink=play-movie-3r3434t44' },
{ title: 'IntensaMente 2', image: 'poster-im2.jpeg', link: 'mId=1022789&mLink=ver-intensamente-2' },
{ title: 'Pollitos en Fuga 1', image: 'poster-pef1.jpeg', link: 'mId=7443&mLink=ver-pollitos-en-fuga-1' },
{ title: 'Pollitos en Fuga 2', image: 'poster-pef2.jpeg', link: 'mId=520758&mLink=ver-pollitos-en-fuga-2' },
{ title: 'Babe: el puerquito valiente', image: 'poster-bepv.jpeg', link: 'mId=9598&mLink=ver-babe-el-puerquito-valiente' },
{ title: 'Rio 2', image: 'poster-r1.jpeg', link: 'mId=172385&mLink=play-movie-r734ty48ty74y8' },
{ title: 'El rescate de Ruby', image: 'poster-erdr.jpeg', link: 'mId=&mLink=ver-el-rescate-de-ruby' },
{ title: 'Como entrenar a tu dragon 1', image: 'poster-ceatd1.jpg', link: 'KYUT9ZQev2ZUpRCalugpmPDfuwdpqhohHH1TimrthqAPcs6cI45jygacbtuFw3wH' },
{ title: 'Como entrenar a tu dragon 2', image: 'poster-ceatd2.jpeg', link: 'ubPrHz9uMjIgVXwu4FWcLuylGd1sGmjgl3iaseD49Uo3iPPQphZYJS3MRMVeWd9s' },
{ title: 'Como entrenar a tu dragon 3', image: 'poster-ceatd3.jpeg', link: 'oIPwKPCmP28z7kFXAmrDfIZCjvKga0UA8R9I8dP2P7tOZQqleaGXTiAsH8pOE7vq' },
{ title: 'Megamente 1', image: 'poster-m1.jpeg', link: 'sDGPe0Umg1Y53vz8KbhmRBw0GGGRk8BtBslOXKFyRg2ErQJpPjavprj5Cf82UvSi' },
{ title: 'Megamente 2', image: 'poster-m2.jpeg', link: '70RuzQv2wfxVad82W0iTAOJliQc8ujy0k6wPVjzcK8mxdZX6rgbtIQk5XlWUE6Rh' },
{ title: 'Naufrago', image: 'poster-n.jpeg', link: 'mId=&mLink=ver-m-naufrago' },
{ title: 'La era de hielo 1', image: 'poster-ledh1.jpeg', link: 'mId=&mLink=ver-la-era-de-hielo-1' },
{ title: 'La era de hielo 2', image: 'poster-ledh2.jpeg', link: 'mId=&mLink=ver-la-era-de-hielo-2' },
{ title: 'La era de hielo 3', image: 'poster-ledh3.jpeg', link: 'mId=&mLink=ver-la-era-de-hielo-3' },
{ title: 'La era de hielo 4', image: 'poster-ledh4.jpeg', link: 'mId=&mLink=ver-la-era-de-hielo-4' },
{ title: 'La era de hielo 5', image: 'poster-ledh5.jpeg', link: 'mId=&mLink=ver-la-era-de-hielo-5' },
{ title: 'La Propuesta', image: 'poster-lp.jpeg', link: 'mId=&mLink=ver-la-propuesta' },
{ title: 'Mis huellas a casa', image: 'poster-mhac.jpg', link: 'mId=&mLink=ver-mis-huellas-a-casa' },
{ title: 'Mi pobre angelito 1', image: 'poster-mpa1.jpg', link: 'mId=&mLink=ver-mi-pobre-angelito-1' },
{ title: 'Mi pobre angelito 2', image: 'poster-mpa2.jpeg', link: 'mId=&mLink=ver-mi-pobre-angelito-2' },
{ title: 'Mi pobre angelito 3', image: 'poster-mpa3.jpeg', link: 'mId=&mLink=ver-mi-pobre-angelito-3' },
{ title: 'El Joven Manos De Tijera', image: 'poster-ejmdt.jpg', link: 'mId=&mLink=ver-el-joven-manos-de-tijeras' },
{ title: 'Paternidad', image: 'poster-p.jpeg', link: 'mId=&mLink=ver-paternidad' },
{ title: 'Desconectados', image: 'poster-d.jpeg', link: 'mId=&mLink=ver-desconectados' },

		],
		recents: [
			{ title: 'Mi pobre angelito 2', image: 'poster-mpa2.jpeg', link: 'mId=&mLink=ver-mi-pobre-angelito-2' },
			{ title: 'Mi pobre angelito 3', image: 'poster-mpa3.jpeg', link: 'mId=&mLink=ver-mi-pobre-angelito-3' },
			{ title: 'El Joven Manos De Tiajera', image: 'poster-ejmdt.jpg', link: 'mId=&mLink=ver-el-joven-manos-de-tijeras' },
			{ title: 'Paternidad', image: 'poster-p.jpeg', link: 'mId=&mLink=ver-paternidad' },
			{ title: 'Desconectados', image: 'poster-d.jpeg', link: 'mId=&mLink=ver-desconectados' },

		],

		documental: [
			{ title: 'Gir: Ultimo refugio del león asiático', image: 'poster-d-gir.jpg', link: 'documental=ver-d-gir' },
			{ title: 'Viaje a la patagonia chilena', image: 'poster-d-pchilena.jpg', link: 'documental=ver-d-pchilena' },
			{ title: 'Kanha: La tierra del tigre', image: 'poster-d-tierra-tigre.jpg', link: 'documental=ver-d-tierra-tigre' },
			{ title: 'Madagascar: Los hijos de lemuria', image: 'poster-d-lemuria.jpg', link: 'documental=ver-d-lemuria' },

		]
	};

	function createMovieCard(movie) {
		return `
		<a href="movies/movie.html?${movie.link}" target="_blank" style="text-decoration: none; color: inherit;">
		  <div class="movie-card">
			  <div class="movie-thumb" style="background: url('assets/jflix/img/${movie.image}') center/cover;"></div>
			  <h3>${movie.title}</h3>
		  </div>
	  </a>
			
		`;
	}

 function renderMovies(sectionId, movies) {
		const section = document.getElementById(sectionId);
		section.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
	}

	renderMovies('avaliables', moviesData.avaliables);
	renderMovies('recents', moviesData.recents);
	renderMovies('documental', moviesData.documental);
});

function MovieFeaturedPlay() {
  window.location.href="assets/jflix/player/reproductor.html?id=ver-up"
}

function MovieFeaturedInfo() {
  window.location.href="https://sites.google.com/view/jflix-api/"
}

function LogInADiferentAccount() {
	cerrarSesion();
}
function MyListOpen() {
	window.location.href="my-list.html?id=true-ChcSXuH05qYavtH8CyGcc3qLDyQwXsvEdtOyK63B2mgZUiPkWmTWgNxL32rmptLB"
}

const styleVerify = document.getElementById('style-verify');
const styleHome = document.getElementById('style-home');
 styleHome.remove();
const container = document.getElementById('container');
const contenidoHome = document.getElementById('content');
contenidoHome.style.display = 'none';
container.style.display = 'block';

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

  const profileName = document.querySelector('.profile-name');


  if (!sesion || !nombre || !edad) {
	  window.location.href = 'index.html';
	  profileName.textContent = 'Usuario no identificado';
	 

  } else {
	  document.getElementById('userInfo').textContent = 
		  `${nombre}, ${edad} años`;
		  profileName.textContent = `Usuario: ${nombre}`;
		
  }
};

function redirigir() {
container.style.display = 'none';
  contenidoHome.style.display = 'block';
  styleVerify.remove();
styleHomeCreate();
}
function styleHomeCreate(){
const existingLink = document.getElementById('style-home');
		if (!existingLink) {
			const nuevoLink = document.createElement('link');
			nuevoLink.id = 'style-home'; // Asigna un ID para poder referenciarlo después
			nuevoLink.rel = 'stylesheet';
			nuevoLink.href = 'assets/jflix/css/estilos.css'; // Ruta a tu hoja de estilos

			document.head.appendChild(nuevoLink); // Agrega el nuevo <link> al <head>
			console.log('El enlace de estilo ha sido agregado.');
		} else {
			console.log('El enlace de estilo ya existe.');
		}

}
function cerrarSesion() {
  deleteCookies();
  window.location.href = 'index.html';
}