let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 5000)



function themedark() {
    document.getElementById('light').style.display = 'block';
     document.getElementById('dark').style.display = 'none';
     document.body.style.color = "#ffffff";
     document.body.style.backgroundColor = "#222222";
}


function themeclair(){
    document.getElementById('dark').style.display = 'block';
    document.getElementById('light').style.display = 'none';
    document.body.style.color = "#222222";
    document.body.style.backgroundColor = "#ffffff";
}