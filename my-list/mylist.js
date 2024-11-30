const url = new URL(window.location.href);
  const idParam = url.searchParams.get('id');

  if (idParam === 'true-ChcSXuH05qYavtH8CyGcc3qLDyQwXsvEdtOyK63B2mgZUiPkWmTWgNxL32rmptLB') {
    // Quitar parámetro id de la URL
    url.searchParams.delete('id');
    window.history.pushState({}, '', url.href);
  } else {
    window.location.href = '../login';
  }
  
const myList = document.getElementById('myList');
const addMovieForm = document.getElementById('addMovieForm');
const movieSelect = document.getElementById('movieSelect');
const errorElement = document.getElementById('error');
let movies = [];
let availableMovies = [
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
     <a href="movies/movie.html?${movie.link}" target="_blank"><img src="https://juan-flix.github.io/assets/jflix/img/${movie.image}" alt="${movie.title}" width="200" height="300" ></a>
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
