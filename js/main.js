console.log("that work!");
const newBody = document.getElementById("myBody");
newBody.innerHTML += `
<header id="myHeader"></header>
`

const manue = ["Home", "Movie", "About", "Search", "Favorite"];
const theHref = ["index.html", "movie.html", "about.html", "search.html", "favorite.html"];
for (let i = 0; i < 5; i++) {
    document.getElementById("myHeader").innerHTML +=`
    <a href="${theHref[i]}">${manue[i]}</a>
    `
}
