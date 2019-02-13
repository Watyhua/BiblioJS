
$('#title').on('click', function () {
    $('#first').fadeIn('slow');
})

$('#first').on('click', function () {
    $('#second').fadeIn('slow');
})

$('#second').on('click', function () {
    $('#third').fadeIn('slow');
})
$('#third').on('click', function () {
    $('body').css('background-image', 'url("https://steamuserimages-a.akamaihd.net/ugc/853844470022855996/72CD26E14B7FCBA028206A06F10548C0D5174CFC/")');
    $('#first').html('H.A.P.P.Y  B.I.R.T.H.D.A.Y !!!');
    $('#second').html('H.A.P.P.Y  B.I.R.T.H.D.A.Y !!!');
    $('#third').html('H.A.P.P.Y  B.I.R.T.H.D.A.Y !!!');
    $('audio#song')[0].play();
})


/*  
En haut de votre page, vous incluerez un message "Joyeux anniversaire", suivi de 3 petits paragraphes de 
voeux, qui se dévoilent un par un lorsque l'on clique sur le précédent. Une fois que l'utilisateur 
a cliqué sur le dernier paragraphe, un gros effet sonore doit se faire entendre ! Vous pouvez
 aussi, pourquoi pas, faire en sorte que l'image d'arrière-plan change,
qu'une animation prenne vie, etc. Tout ce que vous voudrez pour illuminer la journée de votre ami. */