document.getElementsByClassName("nav-link")[1].className = "nav-link active"


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmQzNGM4MzQwYjgzN2ZhMzUzMjEwNjgxOTY4OTkwOCIsInN1YiI6IjY1MThhMGE4OTY3Y2M3MzQyNDY2ZGNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqG_282JhO9ezXgkW1gupYoCe8EnUPT_tSpA5j9EIlc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/find/41?external_source=tvdb_id', options)
    .then(response => response.json())
    .then(response => { console.log(response);
        document.getElementById("myMain").innerHTML += `
        <img src="https://image.tmdb.org/t/p/w500${response.tv_episode_results[0].still_path}" alt="">
        `
    }
    )
    .catch(err => console.error(err));