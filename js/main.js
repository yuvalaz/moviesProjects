const newBody = document.getElementById("myBody");
newBody.innerHTML += `
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    </div>
  </div>
</div>
</nav>
`

const manue = ["Home", "Movie", "About", "Search", "Favorite"];
const theHref = ["index.html", "movie.html", "about.html", "search.html", "favorite.html"];
const head = document.getElementById("myHeader")
for (let i = 0; i < 5; i++) {
    document.getElementsByClassName("navbar-nav")[0].innerHTML +=`
    <a class="nav-link" href="${theHref[i]}">${manue[i]}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
    `
   
}

document.getElementsByClassName("navbar navbar-expand-lg bg-light")[0].style = `
background-color: #ffd;
width:100%;
height: 10vh;
display: flex;
justify-content: space-around;
`


