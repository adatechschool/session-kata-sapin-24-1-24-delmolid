let signeAddition = '+';
let barre = '|';

// afficherPointeSapin()
// Fonction afficherEtoiles(n) qui affiche une ligne de * en fonction du paramètre n
function afficherEtoiles(n){
let etoile = '*'; 
if(n !== undefined){
   let resultat =  ".".repeat(n) + etoile.repeat(n) 
   console.log(resultat);
}
} 


// afficherEtoiles(2)
// afficherEtoiles(5)


// fonction afficherRectangle(hauteur, largeur) qui affiche une rectangle de hauteur et largeur
function afficherRectangle(hauteur, largeur){
if(hauteur !== undefined) 
    for(let i = 0; i < hauteur; i++){
        afficherEtoiles(largeur);
    }
    
} 



// afficherRectangle(5, 5)

function afficherTriangleDroite(n) {
    // En s'inspirant de la fonction afficherRectangle(),
    // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
    if(n !== undefined) {
        for(let i = 0; i < n; i++){
        //  console.log(etoile.repeat(i)); 
          afficherEtoiles(i) 
        
        }   
    
    }
  }
  
//   afficherTriangleDroite(5)



   function afficherTriangleGauche(n) {
    if (n !== undefined) {
      for (let i = 1; i <= n; i++) {
        const espaces = " ".repeat(n - i); // Ajoute les espaces nécessaires pour aligner les étoiles à droite
        const etoiles = "*".repeat(i);    // Ajoute les étoiles pour la ligne actuelle
        console.log(espaces + etoiles);   // Combine espaces et étoiles
      }
    }
  }
  
  afficherTriangleGauche(5);
  

//    function  afficherPointeSapin({
    
//    })