document.getElementsByClassName("nav-link")[3].className = "nav-link active";

const main = document.getElementById("myMain");
searchDiv.innerHTML += `
<div>
    <input id="movieSearch" type="text">
    <button id="searchBtn">Search</button>
</div>
`

for (let a = 0; a < 20; a++) {
    main.innerHTML += `
    <div class="cards">
    <div class="imgHome"></div>
    <div class="cardsButtom">
    <h6 class="nameOfMovie"></h6>
    <img src="photo/unlike.png" class="likes"/>
    </div>
    </div>
      `    
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmQzNGM4MzQwYjgzN2ZhMzUzMjEwNjgxOTY4OTkwOCIsInN1YiI6IjY1MThhMGE4OTY3Y2M3MzQyNDY2ZGNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqG_282JhO9ezXgkW1gupYoCe8EnUPT_tSpA5j9EIlc'
  }
};

let counter = 1

let movieName = document.getElementById("movieSearch");

document.getElementById("searchBtn").addEventListener("click", ()=> {
  console.log(counter);
  fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName.value}&include_adult=false&language=en-US&page=${counter}`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    counter++
    for (let a = 0; a < 20; a++) {
      document.getElementsByClassName("imgHome")[a].innerHTML = `
      <img style="width: 100%; height: 100%" src="https://image.tmdb.org/t/p/w500${response.results[a].poster_path}"/>
      `      
    }
  })
  .catch(err => console.error(err));})


const optionfs = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmQzNGM4MzQwYjgzN2ZhMzUzMjEwNjgxOTY4OTkwOCIsInN1YiI6IjY1MThhMGE4OTY3Y2M3MzQyNDY2ZGNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqG_282JhO9ezXgkW1gupYoCe8EnUPT_tSpA5j9EIlc'
  }
};

fetch('https://api.themoviedb.org/3/search/movie?query=blood&include_adult=false&language=en-US&page=1', optionfs)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
