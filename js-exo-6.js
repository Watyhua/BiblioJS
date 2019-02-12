/* 
Activité : gestion des contacts
*/

var tabPrenom = ["Carole", "Mélodie"];
var tabNom = ["Lévisse", "Nelsonne"];


// fonction affichage des differentes options possibles 
function navigation() {

    console.log("Bienvenue dans le gestionnaire de contact");
    console.log("1 : Liste des contacts");
    console.log("2 : Ajouter un contact");
    console.log("3 : Quitter");
}

navigation();


// fonction lister les contacts
function list() {
    console.log("Voici la liste de tous vos contacts");
    tabPrenom.forEach(prenom => {
        console.log('Prénom :', prenom);
    });
    tabNom.forEach(nom => {
        console.log('Nom :', nom);
    });

}

// conditions pour le le prompt du menu
function menu() {
    var option = parseInt(prompt('Choississez une option :'));

    do {
        if (option == 1) {
            list(), navigation();
            var option = parseInt(prompt('Choississez une option :'));
        } else if (option == 2) {
            addContact();
            var option = parseInt(prompt('Choississez une option :'));
        }
    } while (option != 3)
    alert("Aurevoir et à bientot !");
}

menu();


// fonction ajouter des contacts
function addContact() {
    tabPrenom.push(prompt("Ecrivez le prénom :"));
    tabNom.push(prompt("Ecrivez le nom :    "));
    list();
}



