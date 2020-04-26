function input () {
    player1 = document.querySelector('div.p1 h2').innerHTML = prompt ("Masukkan nama player 1");
    player2 = document.querySelector('div.p2 h2').innerHTML = prompt ("Masukkan nama player 2");
}

function play() {
    // player1
    let random1 = Math.floor(Math.random() * 3) + 1;
    let randomImageSource = "img/img" + random1 +".png";
    document.querySelectorAll('img')[0].setAttribute('src', randomImageSource);

    // player2
    let random2 = Math.floor(Math.random() * 3) + 1;
    let randomImageSource2 = "img/img" + random2 +".png";
    document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

    if (random1 == 1 && random2==2){
        document.querySelector("h1").innerHTML= player1 + " WIN";
    } else if (random1 == 1 && random2==3){
        document.querySelector("h1").innerHTML= player2 + " WIN";
    }else if (random1 == 2 && random2==1){
        document.querySelector("h1").innerHTML= player2 + " WIN";
    }else if (random1 == 2 && random2==3){
        document.querySelector("h1").innerHTML= player1 + " WIN";
    }else if (random1 == 3 && random2==1){
        document.querySelector("h1").innerHTML= player1 + " WIN";
    }else if (random1 == 3 && random2==2){
        document.querySelector("h1").innerHTML= player2 + " WIN";
    }else {
        document.querySelector("h1").innerHTML= "DRAW";
    }
}