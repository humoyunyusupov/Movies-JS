var elPokeList = document.querySelector(".poke-list")

chopilganPokelar = films.slice(0 , 21)

for (var film of chopilganPokelar) {
    
    var newItem = document.createElement("li")
    var newTitle = document.createElement("h2")
    var newImg = document.createElement("img")
    var newOverview = document.createElement("p")
    var newGenres = document.createElement("p")
    
    
    newTitle.textContent = film.title
    newImg.src = film.poster
    newOverview.textContent = film.overview
    newGenres.textContent = film.genres.join(" ")
    
    
    
    newItem.append(newImg ,newTitle , newOverview , newGenres)
    elPokeList.append(newItem)
    
    
}