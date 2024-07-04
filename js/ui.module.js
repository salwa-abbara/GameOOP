export class Ui{
    constructor(){

    }
    displayDataGame(games) {
        let gamesCard = ``;
        for (let i = 0; i < games.length; i++) {
           gamesCard += `
           <div class="col">
           <div games-id="${games[i].id}"  class="card bg-transparent h-100 " role="button" ">
              <div  class="card-body">
                 <figure class="position-relative">
                    <img class="card-img-top object-fit-cover h-100" src="${games[i].thumbnail}" />
                 
                 </figure>
     
                 <figcaption>
     
                    <div class="hstack justify-content-between">
                       <h3 class="h6 small">${games[i].title}</h3>
                       <span class="badge text-bg-primary p-2">Free</span>
                    </div>
     
                    <p class="card-text small text-center opacity-50">
                       ${games[i].short_description.split(" ", 8)}
                    </p>
     
                 </figcaption>
              </div>
     
              <footer class="card-footer small hstack justify-content-between">
     
                 <span class="badge badge-color">${games[i].genre}</span>
                 <span class="badge badge-color">${games[i].platform}</span>
     
              </footer>
           </div>
        </div>`;
        }
  
        document.getElementById("gameData").innerHTML = gamesCard;
    }

    displayDetails(data) {
        const detailsGame = `
        <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="game details img" />
        </div>
        <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>`;
  
        document.getElementById("detailsGameContent").innerHTML = detailsGame;
     }
    
}