document.getElementsByClassName("nav-link")[4].className = "nav-link active"
const main = document.getElementById("myMain");
let whatUserLike = JSON.parse(localStorage.getItem("loved"));
let howMany = whatUserLike.length
console.log(whatUserLike);
console.log(howMany);
for (let i = 0; i < 7; i++) {
    document.getElementsByClassName("imgHomeF").innerHTML = `
    <img style="width: 100%; height: 100%" src="${whatUserLike[i]}"/>
    `
    
}
for (let a = 0; a < howMany; a++) {
  main.innerHTML += `
  <div class="cardsF">
  <div class="imgHomeF">
  <img style="width: 100%; height: 100%" src="${whatUserLike[a]}"/>
  </div>
  <div class="cardsButtomF">
  <h6 class="nameOfMovieF"></h6>
  <img src="photo/like.png" class="likesF"/>
  </div>
  </div>
    ` 
  };