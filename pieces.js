// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// Gérer le comportement du menu mobile
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const joueuseElement = document.createElement("img");
        joueuseElement.src = article.joueuses;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;

        const pointsElement = document.createElement("p");
        pointsElement.innerText = `Points: ${article.points}` ;

      

        const rebondsElement = document.createElement("p");
        rebondsElement.innerText = `Rebonds: ${article.rebonds}`  ;

        const assistsElement = document.createElement("p");
        assistsElement.innerText = `Assists: ${article.assists}` ;

        const stealsElement = document.createElement("p");
        stealsElement.innerText = `Steals: ${article.steals}` ;

        const blockslement = document.createElement("p");
        blockslement.innerText = `Blocks: ${article.blocks}` ;

  
        
        const evalElement = document.createElement("p");
        evalElement.innerText = `Evaluation: ${article.evaluation}` ;
        
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ;
      



        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(joueuseElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(pointsElement);
        pieceElement.appendChild(rebondsElement);
        pieceElement.appendChild(assistsElement);
        pieceElement.appendChild(stealsElement);
        pieceElement.appendChild(blockslement);
        
      
        //Ajout des éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(evalElement);
    
     }
}

genererPieces(pieces);

 //gestion des bouttons 

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.points - a.points;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonRebonds = document.querySelector(".btn-rebonds");

boutonRebonds.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.rebonds - a.rebonds;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonAssists = document.querySelector(".btn-assists");

boutonAssists.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.assists - a.assists;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonSteals = document.querySelector(".btn-steals");

boutonSteals.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.steals - a.steals;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonBlocks = document.querySelector(".btn-blocks");

boutonBlocks.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.blocks - a.blocks;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});



const boutonEval = document.querySelector(".btn-evaluation");

boutonEval.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.evaluation - a.evaluation;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});


const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return !piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].points > 35){
        noms.splice(i,1)
    }
}
console.log(noms)
//Création de l'en-tête

