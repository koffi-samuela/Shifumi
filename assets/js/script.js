                            //PAGE D'ACCUEIL LOGIQUE



     //sELECTION DES BOOTONS DU CHOIX DES EQUIPES DU JOUEUR
     let lakers =  document.querySelector('.lakers') 
     // console.log(lakers);
     let bucks=  document.querySelector('.bucks') 
     // console.log(bucks);
     let warriors =  document.querySelector('.warriors') 
     // console.log(warriors);
                            
     //sELECTION DES BOUTONS DU CHOIX DES EQUIPES DU COMPUTER
                            
     let bulls =  document.querySelector('.bulls') 
     // console.log(bulls);
     let mavs =  document.querySelector('.mavs') 
     // console.log(mavs);
     let clippers =  document.querySelector('.clippers') 
     let random_btn =  document.querySelector('.random-btn') 
     let user_team_choice =  document.querySelector('.userChoice') 
     let computer_team_choice =  document.querySelector('.computerChoice') 
    //  console.log(random_btn);
     let random;
    random_btn.addEventListener('click',function () {
    ComputerTeamChoice()
})
     


function ComputerTeamChoice() {
    random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        bulls.style.backgroundColor = "pink"
        clippers.style.backgroundColor = ""
        mavs.style.backgroundColor = ""
        computer_team_choice.textContent = "Bulls"
    } 
    else if (random == 2) {
        mavs.style.backgroundColor = "pink"
        bulls.style.backgroundColor = ""
        clippers.style.backgroundColor = ""   
        computer_team_choice.textContent = "Mavs"
    }
    else{
        clippers.style.backgroundColor = "pink"
        mavs.style.backgroundColor = ""
        bulls.style.backgroundColor = ""
        computer_team_choice.textContent = "Clippers"

    }
    //stockage dans le locale storage
    localStorage.setItem("ComputerTeam", computer_team_choice.textContent)
    // console.log(localStorage);
    //recuperation  du stockage et affichage de l'info
    // var savedTeams= localStorage.getItem("UserTeam")

}

function changeColor(button) {
    // Changer la couleur du bouton cliqué
    button.style.backgroundColor = "red";
    if (button.classList.contains("lakers")) {
        user_team_choice.textContent = "Lakers"
        // playerChoice.textContent = user_team_choice
        
    } else if (button.classList.contains("bucks")) {
        user_team_choice.textContent = "bucks"
        // playerChoice.textContent = user_team_choice        
    }
    else{
        user_team_choice.textContent = "warriors"
        // playerChoice.textContent = user_team_choice
    }
    // Réinitialiser la couleur des autres boutons à la condition que ces boutons (càd le bouton[i]) ne soit pas les boutons du bot(qui contiennent ces classes) et agissent uniquement sur les boutons de l'utilisateur
    var boutons = document.getElementsByTagName("button");
    for (var i = 0; i < boutons.length; i++) {
      if (boutons[i] !== button && !boutons[i].classList.contains("bulls") && !boutons[i].classList.contains("mavs") && !boutons[i].classList.contains("clippers") ) {
        boutons[i].style.backgroundColor = "";
      }
    }
    //stockage dans le locale storage
    localStorage.setItem("UserTeam", user_team_choice.textContent);
    // console.log(localStorage);
  }


// A faire :
//- selection tout les element dont on a besoin  
//- faire la logique du jeu shifumi a partir de fonction
// Incrémenter les score et les nombre de manche ( 3 manche victorieuse pour le premier qui a un score de 5)
//vérifier a chaque click si ce n'est pas la fin de la partie  la victoire sur sur manche 
//-faire le local storage
// afficher des image en fonctions du vainqueur de chaque round ( un gif joyeux qui decrit le choix du joueur  et du bot )
//-ajouter un message de fin ( victoire pour le jouer ou defaite) assombrissement le fond 

                                    // 1ere PARTIE : SELCTION DES BOUTON DE L'UTILISATEUR
 

        //sELECTION DES BOUTONS DES ACTIONS DU JOUEUR
let btn_cross = document.querySelector('.btn-Cross')
let btn_dunk = document.querySelector('.btn-dunk')
let btn_block = document.querySelector('.btn-block')


//affichage du resultat en phrase
let result_round = document.querySelector('.result-round')

                                    // 2e PARTIE : LOGIC DU JEU
                                    // cross = 1 ----> Dunk = 2 -----> block = 3
                                    // -le cross passe le block
                                    // -le block detruit le dunk
                                    //le dunk annule le cross



        //1- sELECTION DES ElEMENTS du scrore et des manches de l'ordinateur et de l'utilisateur 

// initialisation des scores , des manches et du nombre de manches
let scoreUser = parseInt(localStorage.getItem('scoreUser')) || 0;
let scoreComputer = parseInt(localStorage.getItem('scoreComputer')) || 0;
let roundUser = parseInt(localStorage.getItem('roundUser')) || 0;
let roundComputer = parseInt(localStorage.getItem('roundComputer')) || 0;
let nbRound = 0;                    
//selection du score du joueur et du bot
let poster_score_User = document.querySelector('.scoreUser')
let poster_score_Computer = document.querySelector('.scoreComputer')
poster_score_User.textContent = scoreUser
poster_score_Computer.textContent = scoreComputer

//selection du nombre de  manches du joueur et du bot
let poster_UserRound = document.querySelector('.roundUser')
// console.log(poster_UserRound);
let poster_ComputerRound = document.querySelector('.computerdUser')
//nombre aléatoir pour determiner le chois du bot
let min = 1;
let max = 4;
let Computer;
// selection des éléments pour afficher le choix de l'utilsateur
let playerChoice = document.querySelector('.playerChoice')
let computerChoice = document.querySelector('.computerChoice')

//declaration des variable pour la sauvegarde et des variables temporaires pour la reinitialisatio,
let scoreUserSaved 
let scoreComputerSaved 
let roundUserSaved 
let roundComputerSaved 
let scoreUserSavedTemp
let scoreComputerSavedTemp 
let roundUserSavedTemp 
let roundComputerSavedTemp 

let team_computer_img = document.querySelector('.team_computer_img')
let team_user_img = document.querySelector('.team_user_img')
console.log(team_computer_img,team_user_img);
  ///// recuperation des info des team et affichage 
  function getUserChoice() {
    let savedTeams= localStorage.getItem("UserTeam");
    document.querySelector('.viewTeamuser p').textContent = savedTeams.toUpperCase() ;
    // console.log(team_computer_img.closest('p'));
    // team_user_img.closest('p').textContent = savedTeams
    console.log(savedTeams);
    if (savedTeams.toLowerCase() == "lakers") {
        console.log('les lakers');
        team_user_img.src="../images/logoImages/lakers2.png"
    } else if(savedTeams.toLowerCase() == "bucks"){
        console.log('les bucks');
        team_user_img.src="../images/logoImages/bucks_logo.png"
    }
    else {
        console.log('les warriors');
        // ../images/logoImages/bulls_logo.png
        team_user_img.src="../images/logoImages/warriors_logo.png"

    }
  }
  getUserChoice()


  //affichage de l'equipe du bot
  function getComputerChoice() {
    let savedTeams= localStorage.getItem("ComputerTeam");
    document.querySelector('.viewTeamComputer p').textContent = savedTeams.toUpperCase() ;
    console.log(savedTeams);
    if (savedTeams.toLowerCase() == "bulls") {
        team_computer_img.src="../images/logoImages/bulls_logo.png"
    } else if(savedTeams.toLowerCase() == "mavs"){
        team_computer_img.src="../images/logoImages/mavs_logo.png"
    }
    else {
        // console.log('les warriors');
        // ../images/logoImages/bulls_logo.png
        team_computer_img.src="../images/logoImages/clippers_logo.png"

    }
  }
  getComputerChoice()















                    //2- Creation des différents fonction pour les options du jeu ET INCREMENTATIOn des scores
function UserchooseCross() {
    Computer = Math.floor(Math.random() * (max - min + 1)) + min;
    playerChoice.textContent = "CROSSS"
    if (Computer == 1) {
        console.log('egalitéééééééééé');
        computerChoice.textContent = "CROSSS"
        // result_round.classList.add('win')
        result_round.textContent = "Les deux joueurs on jouer cross : égalité";
        // showGif("../images/gameBoard/terrain.jpg")
        // showGif("../images/gameBoard/terrain.jpg")
    } 
    else if(Computer == 2) {
        computerChoice.textContent = "Dunkkkk"
        scoreComputer+=1
        console.log('perdu LOSERRRRRR');      
        console.log('score du bot ' + scoreComputer);
        console.log('score du joueur ' + scoreUser);
        poster_score_Computer.textContent = scoreComputer
        // console.log('poster score user ' + scoreComputer);
        // result_round.classList.add('lose')
        // result_round.classList.remove('lose')
        result_round.textContent = "Le Dunk annule le croSS : Défaite"
    }
    else{
        // console.log(scoreUser);
        scoreUser+=1
        computerChoice.textContent = "Block"
        console.log(' WINERRRRRR');
        console.log('score du joueur ' + scoreUser);
        console.log('score du bot ' + scoreComputer);
        // console.log('poster score bot ' + scoreComputer);
        poster_score_User.textContent = scoreUser
        // result_round.classList.toggle('win')
        result_round.textContent = "Le Cross passe le Block : victoire"
        showGif("../images/gameBoard/giphy_cross.gif")
        
    }
}
//L'utilisateur chosit le Dunk --> fonction

function UserchooseDunk() {
    playerChoice.textContent = "DUNK"
    Computer = Math.floor(Math.random() * (max - min + 1)) + min;
    if (Computer == 2) {
        console.log('egalitéééééééééé');
        computerChoice.textContent = "DUNK"
        result_round.textContent = "Les deux joueurs ont jouer Dunk"
    } else if(Computer == 3) {
        scoreComputer+=1
        computerChoice.textContent = "BLOCK"
        console.log('perdu LOSERRRRRR');      
        console.log('score du bot ' + scoreComputer);
        console.log('score du joueur ' + scoreUser);
        result_round.textContent = "Le Block contre le Dunk : Défaite"
        poster_score_Computer.textContent = scoreComputer    
    }
    else{
        scoreUser+=1
        computerChoice.textContent = "Cross"
        // console.log(scoreUser);
        poster_score_User.textContent = scoreUser
        console.log(' WINERRRRRR');
        console.log('score du joueur ' + scoreUser);
        console.log('score du bot ' + scoreComputer);
        console.log('poster score bot ' + scoreComputer);
        result_round.textContent = "Le Dunk contre le Cross : Victoire"
        showGif("../images/gameBoard/dunk.gif")
        // assets\images\gameBoard\dunk.gif
        
    }
    // scoreUserSaved = localStorage.getItem('scoreUser')
    // console.log(localStorage);


}
//L'utilisateur chosit le Block --> fonction

function UserchooseBlock() {
    playerChoice.textContent = "BLOCK"
    Computer = Math.floor(Math.random() * (max - min + 1)) + min;
    if (Computer == 3) {
        computerChoice.textContent = "BLOCK"
        result_round.textContent = "Les deux joueurs on jouer Block"
        console.log('egalitéééééééééé');
    } else if(Computer == 1) {
        computerChoice.textContent = "CROSS"
        scoreComputer+=1
        console.log('perdu LOSERRRRRR');      
        console.log('score du bot ' + scoreComputer);
        console.log('score du joueur ' + scoreUser);
        poster_score_Computer.textContent = scoreComputer
        result_round.textContent = "Le cross passe  le block : Défaite"
        
    }
    else{
        computerChoice.textContent = "DUNK"
        scoreUser+=1
        // console.log(scoreUser);
        poster_score_User.textContent = scoreUser
        console.log(' WINERRRRRR'); 
        console.log('score du joueur ' + scoreUser);
        console.log('score du bot ' + scoreComputer);
        console.log('poster score bot ' + scoreComputer);      
        result_round.textContent = "Le Block contre le Dunk : Victoire"
        showGif("../images/gameBoard/contre2.gif")

    }
    
}

        //2- Creation des la fonction pour gérer les resultat à cahque click

function checkResult() {
    localStorage.setItem('scoreUser',scoreUser);
    localStorage.setItem('scorecomputer',scoreComputer);
    // console.log(localStorage);
    // console.log(getScoreSaved()); 
    if (scoreUser == 5) {
        // utilisation des variables temporaires
        scoreUser = 0
        scoreComputer = 0
        roundUser+= 1
        poster_score_User.textContent = scoreUser
        poster_score_Computer.textContent = scoreComputer
        poster_UserRound.textContent = roundUser
    } else if(scoreComputer == 5) {
        // utilisation des variables temporaires
        scoreComputer = 0
        scoreUser = 0
        poster_score_User.textContent = scoreUser
        poster_score_Computer.textContent = scoreComputer
        roundComputer+= 1
        poster_ComputerRound.textContent = roundComputer
    }
    if (roundUser == 3) {
        localStorage.setItem('roundUser',roundUser);
        localStorage.setItem('roundcomputer',roundComputer);
        showGif("../images/gameBoard/win.gif")
        roundUser = 0
        roundComputer = 0
        console.log('VICTOIREEEEEEE');
    } else if (roundComputer == 3) {
        localStorage.setItem('roundUser',roundUser);
        localStorage.setItem('roundcomputer',roundComputer);
        showGif("../images/gameBoard/lose.gif")
        roundComputer = 0
        roundUser = 0
        console.log('LOOSERRRR');
        
    }
}


// const showImageBtn = document.getElementById('show-image-button');
const overlay = document.getElementById('overlay');
const image = overlay.querySelector('img');
console.log(image);
function showGif(source) {
    image.src = source
    // overlay.classList.add('show');
console.log(image);

    setTimeout(() => {
        overlay.classList.add('show');
      }, 1000);
      setTimeout(() => {
        overlay.classList.remove('show');
      }, 5200);
      overlay.addEventListener('click', () => {
    overlay.classList.remove('show')})
    }




// 2e PARTIE : AJOUT DES EVENEMENT SUR LES BOUTONS
btn_cross.addEventListener('click',function () {
    UserchooseCross();
    checkResult();
})
btn_dunk.addEventListener('click',function () {
    UserchooseDunk();
    checkResult();
})
btn_block.addEventListener('click',function () {
    UserchooseBlock();
    checkResult();
})

// --------SAUVEGARDE------
// localStorage.setItem('scoreUser',scoreUser)
console.log(localStorage);
function saveScore() {
    localStorage.setItem('scoreUser',scoreUser);
    localStorage.setItem('scorecomputer',scoreComputer);
    localStorage.setItem('roundUser',roundUser);
    localStorage.setItem('roundcomputer',roundComputer);
    console.log(localStorage);
}
function getScoreSaved() {
    scoreUserSaved = localStorage.getItem('scoreUser')
    console.log(scoreUserSaved);
    scoreComputerSaved = localStorage.getItem('scorecomputer')
    roundUserSaved = localStorage.getItem('roundUserSaved')
    roundComputerSaved = localStorage.getItem('roundcomputer')     
}

function clearLocalStorage() {
    localStorage.removeItem('scoreUser');
    localStorage.removeItem('scoreComputer');
    localStorage.removeItem('roundUser');
    localStorage.removeItem('roundComputer');
}
document.querySelector('.renitialize').addEventListener("click", ()=>{
    clearLocalStorage()
    location.reload()
})