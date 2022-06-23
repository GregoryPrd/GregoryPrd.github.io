function enleverActiveImages() {
    for(i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 5000);


function themedark() {
    document.getElementById('light').style.display = 'block';
    document.getElementById('dark').style.display = 'none';
    document.body.style.color = "#ffffff";
    document.body.style.backgroundColor = "#222222";
    setCookie('theme', 1);
}


function themeclair(){
    document.getElementById('dark').style.display = 'block';
    document.getElementById('light').style.display = 'none';
    document.body.style.color = "#222222";
    document.body.style.backgroundColor = "#ffffff";
    setCookie('theme', 2);
}

function setCookie(key, value) {
    document.cookie = key + '=' + value;
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

/** COOKIES THEME **/

var theme = getCookie('theme');

if (theme !== null) {
    if(theme === '1')
        themedark();
    else
        themeclair();
}



/** GESTION SLIDER **/

img__slider = document.getElementsByClassName('img__slider');

etape = 0;

nbr__img = img__slider.length;

precedent = document.querySelector('.precedent');
suivant = document.querySelector('.suivant');

if (suivant !== null) {

    suivant.addEventListener('click', function() {
        etape++;
        if(etape >= nbr__img) {
            etape = 0;
        }
        enleverActiveImages();
        img__slider[etape].classList.add('active');
    });

    precedent.addEventListener('click', function() {
        etape--;
        if(etape < 0) {
            etape = nbr__img - 1;
        }
        enleverActiveImages();
        img__slider[etape].classList.add('active');
    });
}