// creation des deux variables 
var i, nb_pairs;

// creation d'un nouveau tableau
var tableau = new Array;
//initialisation de la valeur de la variable nbPairs à 0  
nbPairs = 0;
//boucle for (initialisation de la valeur de la variable i à 1, tant que i est inférieur ou égal à 5, on incrémente i) 
for (i = 1; i <= 5; i++) {
//prompt dans lequel l'utilisateur doit choisir les valeurs à assigner au tableau
    tableau[i] = parseInt(prompt("tableau[" + i + "] :  "));

}
// boucle for (initialisation de la valeur de variable i à 1, tant que i est inférieur ou égale à 5, on incrémente i)
for (i = 1; i <= 5; i++) {
//le modulo sert à vérifier si le chiffre est pair ou non  
    if (tableau[i] % 2 == 0) {

        nbPairs = nbPairs + 1;
        
    } 
}
//affichage du nombre de nombres pairs contenus dans le tableau
document.write("Le tableau contient " + nbPairs + " nombres pairs");