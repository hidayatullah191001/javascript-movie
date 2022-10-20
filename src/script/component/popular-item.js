class PopularItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set popular(movie) {
    this._movie = movie;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .container {
          position: relative;
          width: 50%;
        }
        
        .cover-image {
          opacity: 1;
          display: block;
          width: 250px;
          margin-bottom : 20px;
          margin-top : 20px;
          flex-basis: 25%;
          height: auto;
          transition: .5s ease;
          backface-visibility: hidden;
        }
        
        .card {
          display : flex;
          flex-direction : column;
          justify-content : center;
          align-item : center;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: .5s ease;
          background-color: rgba(255, 115, 21, 0.8);
        }
        
        .container:hover .cover-image {
          opacity: 0.3;
        }
        
        .container:hover .card {
          opacity: 1;
        }
        
        .text {
          color: white;
          font-size: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
        }

        p{
          font-size:14px;
        }

        span{
          font-weight:bold;
        }

        @media screen and (max-width : 600px) {
          .cover-image{
            opacity: 1;
            display: block;
            width: 150px;
            margin-bottom : 20px;
            margin-top : 20px;
            flex-basis: 25%;
            height: auto;
            transition: .5s ease;
            backface-visibility: hidden;
          }

          .text {
            color: white;
            font-size: 14px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
          }

          p{
            font-size:10px;
          }
        }
        
        </style>

        <div class="container">
          <img src="https://image.tmdb.org/t/p/original${this._movie.poster_path}" class="cover-image">
          <div class="card text">
          <h4>${this._movie.title}</h4>
          <p><span>${this._movie.popularity}</span> views</p>
          <p>Release Date : <span>${this._movie.release_date}</span></p>
          <br>
          <p>Rate : <span>${this._movie.vote_average}</span></p>
          </div>
        </div>
      `;
  }
}

customElements.define('popular-item', PopularItem);
