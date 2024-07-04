import { Details } from "./details-game.module.js";
import { Ui } from "./ui.module.js";

export class Games{
    constructor(){
        this.getGames("mmorpg");
        document.querySelectorAll('.nav-link').forEach(e =>{
            e.addEventListener('click',()=>{
                document.querySelector('.navbar-nav .active').classList.remove('active');
                e.classList.add('active');
                this.getGames(e.dataset.category);
                
            })
        });
        this.ui = new Ui();
    };
    async getGames(category){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
            },
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();
        this.ui.displayDataGame(response);
        this.clickCard();
        loading.classList.add("d-none");

    }
    clickCard() {
        document.querySelectorAll(".card").forEach((gameCard) => {
           gameCard.addEventListener("click", () => {
              let id = gameCard.getAttribute('games-id');
              const details = new Details(id);
              document.querySelector(".games").classList.add("d-none");
              document.querySelector(".details-game").classList.remove("d-none");
           });
        });
     }
  
}