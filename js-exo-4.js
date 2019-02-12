
 
function IsGoodNumber() {

    var RandomNumber = Math.floor(Math.random() * (1, 100));
    var number = parseInt(prompt('Trouves le chiffre mystère entre 0 et 100 ! '));

    do {
        if (number < RandomNumber) {
            var number = parseInt(prompt('C est plus mon lapin !'));
        } else if (number > RandomNumber) {
            var number = parseInt(prompt('Moins que ça....'));
        }
    } while (number !== RandomNumber)
    alert('Félicitations, tu crois pouvoir faire mieux ?');

}
IsGoodNumber();

/* L'ordinateur choisit un nombre au hasard, plus petit ou égal à 100.
Le but est de deviner ce nombre. À chaque fois que l'utilisateur propose un nombre, 
on indique si le nombre à deviner est plus petit ou
 plus grand que celui-ci. utiliser prompt() au lieu de console.log() */


