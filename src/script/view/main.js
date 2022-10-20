import '../component/popular-list.js';

const main = () => {
  const api_key = '1c431675ec1b68445c6a77576840483f';
  const languange = 'en-US';
  const page = '1';
  const baseUrl = 'https://api.themoviedb.org/3';

  const getPopular = async () => {
    try {
      const response = await fetch(`${baseUrl}/movie/popular?api_key=${api_key}&languange=${languange}&page=${page}`);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderPopularMovie(responseJson.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (key) => {
    try {
      const response = await fetch(`${baseUrl}/search/movie?api_key=${api_key}&languange=${languange}&query=${key}&page=${page}`);
      const responseJson = await response.json(); 
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderPopularMovie(responseJson.results);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUpComingMovie = async () => {
    try {
      const response = await fetch(`${baseUrl}/movie/upcoming?api_key=${api_key}&languange=${languange}`);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderUpComingtMovie(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(responseJson.error);
    }
  }

  const renderUpComingtMovie = (movies) => {
    const UpComingMovieItem = document.querySelector('#upcomingMovie');
    UpComingMovieItem.innerHTML = '';

    movies.forEach(movie => {
      UpComingMovieItem.innerHTML += `
        <div class="carousel-item item" align="center">
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${movie.title}</h5>
          <p>${movie.overview}</p>
        </div>
      </div>
      `;
    });
  };

  const renderPopularMovie = (movies) => {
    const popularListElement = document.querySelector('popular-list');
    popularListElement.classList.add('flex-container');
    popularListElement.populars = movies;
  }

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    getPopular();
    getUpComingMovie();
    $('.text-title').html("Popular Movie");
  });

  $('#btnCari').click(() => {
    let key = $("#keyword").val();
    if(key == ''){
      alert('Kata kunci tidak boleh kosong!');
    }else{
      $('.text-title').html("Result Search");
      searchMovie(key);
    }
  });
}

export default main;