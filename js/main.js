console.log("that work!");
const newBody = document.getElementById("myBody");
newBody.innerHTML += `
<header class="navbar navbar-expand-lg bg-light" id="myHeader"></header>
`

const manue = ["Home", "Movie", "About", "Search", "Favorite"];
const theHref = ["index.html", "movie.html", "about.html", "search.html", "favorite.html"];
const head = document.getElementById("myHeader")
for (let i = 0; i < 5; i++) {
    head.innerHTML +=`
    <a class="nav-link" href="${theHref[i]}">${manue[i]}</a>
    `
}

head.style = `
background-color: #ffd;
width:100%;
height: 10vh;
display: flex;
justify-content: space-around;
`