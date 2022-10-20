import './popular-item.js';

class PopularList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set populars(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.host.classList.add('flex-container');
    this._movies.forEach(movie => {
      const popularMoviesItemElement = document.createElement('popular-item');
      popularMoviesItemElement.popular = movie;
      this.shadowDOM.appendChild(popularMoviesItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('popular-list', PopularList);
