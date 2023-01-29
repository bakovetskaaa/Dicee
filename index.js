    // Image 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceeImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceeImage;


    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);




    // Image 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceeImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomDiceeImage2;


    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);

    // Header
    var header = document.querySelector("h1");

    if (randomNumber1 === randomNumber2){
    header.innerHTML ="Draw!"
    } else if (randomNumber1 > randomNumber2){
        header.innerHTML ="Player 1 wins!"
    } else if (randomNumber1 < randomNumber2){
        header.innerHTML ="Player 2 wins!"
    }
// if (randomNumber1 === 1){
//     setAttribute(<img src="" alt=""/>);
// } else if (randomNumber1 === 2){
//
// } else if (randomNumber1 === 3){
//
// } else if (randomNumber1 === 4){
//
// } else if (randomNumber1 === 5){
//
// } else if (randomNumber1 === 6){
//
// }