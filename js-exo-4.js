
$("#button").on('click' , function IsGoodNumber() {

    var RandomNumber = Math.floor(Math.random() * (1, 100));
    var number = parseInt(prompt('Trouves le chiffre mystère entre 0 et 100 ! '));
    var count = 1;


    do {

        if (number < RandomNumber) {
            var number = parseInt(prompt('C est plus mon lapin !'));
            count++;
        } else if (number > RandomNumber) {
            var number = parseInt(prompt('Moins que ça....'));
            count++;
        }
    } while (number !== RandomNumber)

    swal({
        title: "Beau travail !",
        text: "Tu as réussi en " + count + " tentatives, je suis fier de toi !",
        icon: "success",
    });
});  




/* L'ordinateur choisit un nombre au hasard, plus petit ou égal à 100.
Le but est de deviner ce nombre. À chaque fois que l'utilisateur propose un nombre, 
on indique si le nombre à deviner est plus petit ou
 plus grand que celui-ci. utiliser prompt() au lieu de console.log() */


