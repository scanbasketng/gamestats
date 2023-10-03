// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('reserve.json');
const pieces = await reponse.json();

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
// Gestion du menu déroulant
const menuDeroulant = document.querySelector("#menu-deroulant");

menuDeroulant.addEventListener("change", function() {
  const filtreSelectionne = menuDeroulant.value;
  let piecesOrdonnees;

  switch (filtreSelectionne) {
    case "marqueuse":
      piecesOrdonnees = Array.from(pieces);
      piecesOrdonnees.sort(function(a, b) {
        return b.points - a.points;
      });
      break;
    case "rebonds":
      piecesOrdonnees = Array.from(pieces);
      piecesOrdonnees.sort(function(a, b) {
        return b.rebonds - a.rebonds;
      });
      break;
    case "assists":
      piecesOrdonnees = Array.from(pieces);
      piecesOrdonnees.sort(function(a, b) {
        return b.assists - a.assists;
      });
      break;
    case "steals":
      piecesOrdonnees = Array.from(pieces);
      piecesOrdonnees.sort(function(a, b) {
        return b.steals - a.steals;
      });
      break;
    case "blocks":
      piecesOrdonnees = Array.from(pieces);
      piecesOrdonnees.sort(function(a, b) {
        return b.blocks - a.blocks;
      });
      break;
    case "evaluation":
      piecesOrdonnees = Array.from(pieces);
      piecesOrdonnees.sort(function(a, b) {
        return b.evaluation - a.evaluation;
      });
      break;
    default:
      piecesOrdonnees = Array.from(pieces);
  }

  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});