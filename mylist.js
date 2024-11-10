
const myList = document.getElementById('myList');
const addMovieForm = document.getElementById('addMovieForm');
const movieSelect = document.getElementById('movieSelect');
const errorElement = document.getElementById('error');
let movies = [];
let availableMovies = [
  { title: 'Loca por las compras', image: 'poster-lpc.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-loca-por-las-compras' },
  { title: 'Mi villano favorito 4', image: 'poster-mvf4.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-mi-villano-favorito-4' },
  { title: 'UP: Una aventura en las alturas', image: 'poster-up.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-up' },
  { title: 'Un vecino gruñón', image: 'poster-uvg.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-un-vecino-gru%C3%B1%C3%B3n' },
  { title: 'Planeta de los simios: Nuevo Reino', image: 'poster-pdls.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-planeta-de-los-simios' },
  { title: 'Daniel el Travieso', image: 'poster-det.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-daniel-el-travieso' },
  { title: 'Los pinguinos de papá', image: 'poster-lpdp.jpeg', link: 'https://sites.google.com/view/juan-flix/play-movie-3r3434t44' },
  { title: 'IntensaMente 2', image: 'poster-im2.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-intensamente-2' },
  { title: 'Pollitos en Fuga 1', image: 'poster-pef1.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-pollitos-en-fuga-1' },
  { title: 'Pollitos en Fuga 2', image: 'poster-pef2.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-pollitos-en-fuga-2' },
  { title: 'Babe: el puerquito valiente', image: 'poster-bepv.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-babe-el-puerquito-valiente' },
  { title: 'Rio 2', image: 'poster-r1.jpeg', link: 'https://sites.google.com/view/juan-flix/play-movie-r734ty48ty74y8' },
  { title: 'El rescate de Ruby', image: 'poster-erdr.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-el-rescate-de-ruby' },
  { title: 'Como entrenar a tu dragon 1', image: 'poster-ceatd1.jpg', link: 'https://sites.google.com/view/juan-flix/KYUT9ZQev2ZUpRCalugpmPDfuwdpqhohHH1TimrthqAPcs6cI45jygacbtuFw3wH' },
  { title: 'Como entrenar a tu dragon 2', image: 'poster-ceatd2.jpeg', link: 'https://sites.google.com/view/juan-flix/ubPrHz9uMjIgVXwu4FWcLuylGd1sGmjgl3iaseD49Uo3iPPQphZYJS3MRMVeWd9s' },
  { title: 'Como entrenar a tu dragon 3', image: 'poster-ceatd3.jpeg', link: 'https://sites.google.com/view/juan-flix/oIPwKPCmP28z7kFXAmrDfIZCjvKga0UA8R9I8dP2P7tOZQqleaGXTiAsH8pOE7vq' },
  { title: 'Megamente 1', image: 'poster-m1.jpeg', link: 'https://sites.google.com/view/juan-flix/sDGPe0Umg1Y53vz8KbhmRBw0GGGRk8BtBslOXKFyRg2ErQJpPjavprj5Cf82UvSi' },
  { title: 'Megamente 2', image: 'poster-m2.jpeg', link: 'https://sites.google.com/view/juan-flix/70RuzQv2wfxVad82W0iTAOJliQc8ujy0k6wPVjzcK8mxdZX6rgbtIQk5XlWUE6Rh' },
   { title: 'Naufrago', image: 'poster-n.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-m-naufrago' },
   { title: 'La era de hielo 1', image: 'poster-ledh1.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-la-era-de-hielo-1' },
   { title: 'La era de hielo 2', image: 'poster-ledh2.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-la-era-de-hielo-2' },
   { title: 'La era de hielo 3', image: 'poster-ledh3.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-la-era-de-hielo-3' },
   { title: 'La era de hielo 4', image: 'poster-ledh4.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-la-era-de-hielo-4' },
   { title: 'La era de hielo 5', image: 'poster-ledh5.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-la-era-de-hielo-5' },
   { title: 'La Propuesta', image: 'poster-lp.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-la-propuesta' },
   { title: 'Mis huellas a casa', image: 'poster-mhac.jpg', link: 'https://sites.google.com/view/juan-flix/ver-mis-huellas-a-casa' },
   { title: 'Mi pobre angelito 1', image: 'poster-mpa1.jpg', link: 'https://sites.google.com/view/juan-flix/ver-mi-pobre-angelito-1' },
    { title: 'Mi pobre angelito 2', image: 'poster-mpa2.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-mi-pobre-angelito-2' },
     { title: 'Mi pobre angelito 3', image: 'poster-mpa3.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-mi-pobre-angelito-3' },
     { title: 'El Joven Manos De Tijera', image: 'poster-ejmdt.jpg', link: 'https://sites.google.com/view/juan-flix/ver-el-joven-manos-de-tijeras' },
     { title: 'Paternidad', image: 'poster-p.jpeg', link: 'https://sites.google.com/view/juan-flix/ver-paternidad' },
  { title: '', image: '', link: '' }
];

function loadMovies() {
  try {
    const storedMovies = Cookies.get('movies');
    if (storedMovies) {
      movies = JSON.parse(storedMovies);
    }
  } catch (error) {
    console.error('Error loading movies from cookies:', error);
    errorElement.textContent = 'Error al cargar las películas. Se usará una lista vacía.';
    movies = [];
  }
}

function displayMovies() {
  myList.innerHTML = '';
  movies.forEach((movie, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item';
    itemElement.innerHTML = `
     <a href="${movie.link}" target="_blank"><img src="https://juandevgroup.github.io/downloads-delivery/juan-flix/login/img/${movie.image}" alt="${movie.title}" width="200" height="300" ></a>
      <div class="title">${movie.title}</div>
      <button class="remove" onclick="removeMovie(${index})">×</button>
    `;
    myList.appendChild(itemElement);
  });
}

function addMovie(title, image, link) {
  if (!movies.some(movie => movie.title === title)) {
    movies.push({ title, image, link });
    saveMovies();
    displayMovies();
    updateAvailableMovies();
  } else {
    errorElement.textContent = 'Esta película ya está en tu lista.';
  }
}

function removeMovie(index) {
  movies.splice(index, 1);
  saveMovies();
  displayMovies();
  updateAvailableMovies();
}

function saveMovies() {
  try {
    Cookies.set('movies', JSON.stringify(movies), { expires: 365, secure: true, sameSite: 'strict' });
  } catch (error) {
    console.error('Error saving movies to cookies:', error);
    errorElement.textContent = 'Error al guardar las películas. Los cambios no se mantendrán después de cerrar el navegador.';
  }
}

function updateAvailableMovies() {
  movieSelect.innerHTML = '<option value="">Selecciona una película o serie</option>';
  availableMovies.forEach(movie => {
    if (!movies.some(m => m.title === movie.title)) {
      const option = document.createElement('option');
      option.value = movie.title;
      option.textContent = movie.title;
      movieSelect.appendChild(option);
    }
  });
}

addMovieForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedTitle = movieSelect.value;
  if (selectedTitle) {
    const selectedMovie = availableMovies.find(movie => movie.title === selectedTitle);
    addMovie(selectedMovie.title, selectedMovie.image, selectedMovie.link);
    movieSelect.value = '';
    errorElement.textContent = '';
  } else {
    errorElement.textContent = 'Por favor, selecciona una película o serie.';
  }
});

// Cargar las películas al iniciar
loadMovies();
displayMovies();
updateAvailableMovies();
