console.log("home");
document.getElementsByClassName("nav-link")[0].className = "nav-link active"
const main = document.getElementById("myMain");
for (let a = 0; a < 20; a++) {
    main.innerHTML += `
    <div class="imgHome">
    <p class="movieName"></p>
    </div>
    `    
};


let dayOrWeek = "day";
const dayWeek = document.getElementById("dayWeek");
let counter = 1

const counterBtn = document.getElementById("counterNum")
counterBtn.addEventListener("click", () =>{
  counter++
  console.log(counter);
  counterBtn.innerText = counter;
  fetch(`https://api.themoviedb.org/3/trending/movie/${dayOrWeek}?language=en-US&page=${counter}`, options)
  .then(response => response.json())
  .then(response => {
    for (let c = 0; c < 20; c++) {
      document.getElementsByClassName("imgHome")[c].innerHTML = `
      <img style="width: 100%; height: 100%" src="https://image.tmdb.org/t/p/w500${response.results[c].poster_path}"/>
      `

    };
  })
  .catch(err => console.error(err));


  

})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmQzNGM4MzQwYjgzN2ZhMzUzMjEwNjgxOTY4OTkwOCIsInN1YiI6IjY1MThhMGE4OTY3Y2M3MzQyNDY2ZGNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqG_282JhO9ezXgkW1gupYoCe8EnUPT_tSpA5j9EIlc'
  }
};

dayWeek.addEventListener("click", () => {
  if(dayOrWeek == "week"){
    dayOrWeek = "day";
    dayWeek.innerText = "day";
    
    fetch(`https://api.themoviedb.org/3/trending/movie/${dayOrWeek}?language=en-US&page=${counter}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      console.log(response.results[5].backdrop_path)
      for (let b = 0; b < 20; b++) {
        document.getElementsByClassName("imgHome")[b].innerHTML = `
        <img style="width: 100%; height: 100%" src="https://image.tmdb.org/t/p/w500${response.results[b].poster_path}"/>
        `
  
      };
    })
    .catch(err => console.error(err));
  

    return
  }
  else{
    dayOrWeek = "week";
    dayWeek.innerText = "week";
    fetch(`https://api.themoviedb.org/3/trending/movie/${dayOrWeek}?language=en-US&page=${counter}`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    console.log(response.results[5].backdrop_path)
    for (let b = 0; b < 20; b++) {
      document.getElementsByClassName("imgHome")[b].innerHTML = `
      <img style="width: 100%; height: 100%" src="https://image.tmdb.org/t/p/w500${response.results[b].poster_path}"/>
      `
        document.getElementsByClassName("movieName")[b].innerText = `
        ${response.results[b].title}
        `
      
    };
  })
  .catch(err => console.error(err));


    
    return
  }

})

fetch(`https://api.themoviedb.org/3/trending/movie/${dayOrWeek}?language=en-US&page=${counter}`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    console.log(response.results[5].backdrop_path)
    for (let b = 0; b < 20; b++) {
      document.getElementsByClassName("imgHome")[b].innerHTML += `
      <img style="width: 100%; height: 100%" src="https://image.tmdb.org/t/p/w500${response.results[b].poster_path}"/>
      `

    };
  })
  .catch(err => console.error(err));



