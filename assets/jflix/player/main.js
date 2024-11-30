

const {documental} = getUrlParams(); // Obtiene los parámetros desde la URL
// si hay un parámetro 'documental'
if (documental) {

  window.location = `documental/${documental}.html`

}
const TMDB_API_KEY = '26750a2fb7d61fdec546f4df7c4ad631';
const movieData = [
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

];

const driveIds = {
"20048": "1QtYLEkgft1gg8o3sXBf461_xWnnRHgiz",
"519182": "10oLLwOFU4FnE6sRpRpNz3cuq8U4W6oiF",
"14160": "1V5x-AtUgfO4pKtdAgoeN2vFJPmlhVUsR",
"937278": "16DLsk6dIvhta6QpJg5SEShZ7buim9lQh",
"61791": "15sL0t6S6VOd0RV0-OeJ16McT0A194g2B",
"119450": "1hBBrh90wXTmGJ3c2F8nMTs6KUxXCWSQ0", 
"281338": "1NjKcauUidCWRzj3DNcc0Msvf_jLejLYw",
"653346": "1OtVMzl5eyZb9yWHNnt9Ls4WJCRRg2brI",
"45242": "1HDlwtZzYwf0dDpe4FOeO2edm53HiYKCv",
"58224": "1XbMWrzbtzGGWYEZibGeHvUtxz0H8beez",
"1022789": "1uIZJq1Ge_5Am92T4SJy1AFEzX0B1oLb-",
"7443": "1tY834Aljf3zMysi35Ju3jJypvPO2_uxO",
"520758": "1xvGPxOFmExLWoHp9xtAl0sKBy7EaZAZ5",
"9598": "1jCq9iEyoltmru75ahcIbNc5bqQqth98t",
"172385": "1bmWeehcipVb1wyf8nryp1BDgLYC1G7mx",
"921655": "1GaJpwDuJUMYLNMqwkIt6Nd9co8Wd_kBm",
"10191": "18OEW72R2IQj80PureB_mwidVb-dIjxAU",
"82702": "1gm-_W8Mvrtkg5o01QSB2O5qVGEM3cl6f",
"166428": "19dZ4N8MOY7SuYtiY_XqqFEc91vcipTxv", 
"38055": "1AscWKXHzR6Ta4FrZ-Fx0JBcA-FEzDoe3",
"1239251": "1PF-XY99Yl_-wh_1J8c9fcf5CiKTVVKPn",
"8358": "1WOVtYoJaN_EeRWfZWkuE9uGkfnlkGUAp",
"425": "1cDMfS_Hxp__M_wefndINS84f4cmsrQRn",
"950": "1DnTAoXDUD_0YvJn81A3_mDnRUeRXTMhi",
"8355": "1kK8i8ftkvafhffUAHGnBT6JOHhjwTjC1",
"57800": "1Qo0yQR516KYY_x2Ixp8K5eFziqeiv7bP",
"278154": "1hnNxAnTktXUb6uMaT9CF_Z-Cxdvxbge2",
"18240": "1QqgGaKUdxpTaaPyU__W8ghBe5nLkklVm",
"508763": "1zslVTCoZ-eU9sEvGPDJ-mgbUH5LXoh75",
"771": "1ymTW4mQ1neruP81trmiWKw-XWHeSCNyj",
"772": "1h0x7gjUb6qJn3C6nVn-h-vSo_Fsabm_-",
"9714": "1MeBgPDsTFiPKM0TAiuAJaSPIwU2w2QJ5",
"162": "1OrZ5WgnYDurPxLsQTe3EFJvRYpR6jHpO",
"607259": "1ZQq7RJ6n--q3VIo-0iHqS1TrMrsGEe1M",
"1062088": "1Oaa_9IUvuaT9_4cImkefjCGxkHfbrZfj",
"585": "1-UIqNkqgwaEoRy0cN4z6FmlDNiVuSGc8",
"790493": "1t-ouA0m-kJUfSLcL5q_8Pj6lwk3skuLo",
"1184918": "19c12NYruHtGGiNwQcPGjH0WdKJSIYiF6",
"705861": "1rvwVmyVlFhOLA_mQlXD2ld_ZW--GdyAY",
};

function showError(title, message, duration = 5000) {
const errorContainer = document.createElement('div');
errorContainer.className = 'error-container';

const errorTitle = document.createElement('div');
errorTitle.className = 'error-title';
errorTitle.textContent = title;

const errorMessage = document.createElement('p');
errorMessage.className = 'error-message';
errorMessage.textContent = message;

errorContainer.appendChild(errorTitle);
errorContainer.appendChild(errorMessage);
document.body.appendChild(errorContainer);

setTimeout(() => {
  errorContainer.remove();
}, duration);
}

function showNotFound() {
const playerContainer = document.querySelector('.player-container');
playerContainer.innerHTML = `
  <div class="not-found-container">
    <h2 class="not-found-title">Película no encontrada</h2>
    <p class="not-found-message">Lo sentimos, la película que estás buscando no está disponible o no existe.</p>
  </div>
`;
}

function getUrlParams() {
try {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get('mLink'),
    mId: params.get('mId'),
    documental: params.get('documental'),
  };
} catch (error) {
  document.title = `Juan Flix+ | Error`;
  showError('Error', 'Error al procesar los parámetros de la URL');
  return { id: null, mId: null };
}
}

function findMovieByLink(movieLink) {
if (!movieLink) {
  document.title = `Juan Flix+ | Error`;
  showError('Error', 'No se proporcionó un identificador de película válido');
  return null;
}

try {
  const movie = movieData.find(movie => {
    const linkPart = movie.link.split('mLink=')[1];
    return linkPart === movieLink;
  });
  
  if (!movie) {
    showNotFound();
    return null;
  }
  
  // Obtener el ID de Google Drive correspondiente
  const driveId = driveIds[movie.id];
  if (!driveId) {
      document.title = `Juan Flix+ | Error`;
    showError('Error', 'No se encontró el enlace del video');
    return null;
  }
  
  // Establecer el src del iframe
  const videoFrame = document.getElementById('video-frame');
  videoFrame.src = `https://drive.google.com/file/d/${driveId}/preview?usp=drive_link&usp=embed_googleplus&usp=embed_googleplus`;
  
  return movie;
} catch (error) {
  document.title = `Juan Flix+ | Error`;
  showError('Error', 'Error al buscar la película en la base de datos');
  return null;
}
}

async function fetchBackdrop(movieId) {
if (!movieId) {
  document.title = `Juan Flix+ | Error`;
  showError('Error', 'ID de película no válido');
  return;
}

try {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`);
  
  if (!response.ok) {
      document.title = `Juan Flix+ | Error`;
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  if (data.backdrop_path) {
    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`;
  } else {
    showError('Advertencia', 'No se encontró imagen de fondo para esta película');
  }
} catch (error) {
  showError('Error', 'Error al cargar la imagen de fondo: ' + error.message);
}
}

function initializePlayer() {
try {
  const params = getUrlParams();
  if (!params.id) {
      
      
      
      document.title = `Juan Flix+ | Error`;
    showError('Error', 'No se proporcionó un ID de película');
    showNotFound();
    return;
  }

  const movie = findMovieByLink(params.id);
  if (movie) {
    document.getElementById('movieTitle').textContent = `Ver: "${movie.title}"`;
    document.title = `Juan Flix+ | Ver: "${movie.title}"`
    fetchBackdrop(movie.id);
    
    const player = new Plyr('#player', {
      settings: ['captions', 'quality', 'speed'],
      ratio: '16:9'
    });
  }
} catch (error) {
  document.title = `Juan Flix+ | Error`;
  showError('Error Fatal', 'Error al inicializar el reproductor: ' + error.message);
  showNotFound();
}
}

document.addEventListener('DOMContentLoaded', initializePlayer);