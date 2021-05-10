var elem = document.querySelector('#app-name-landscape');
var sunrise = document.querySelector("#sunrise");

var timesClicked = 0;
document.querySelector("#theme-landscape-2").addEventListener('click', function (event) {
    timesClicked++;

    if (timesClicked % 2 != 0) {
        elem.style.display = "block";
        sunrise.style.display = "block";
        elem.classList.add('fadeInDown');
        sunrise.classList.add('fadeInDown');
    } else {
        elem.style.display = "none";
        sunrise.style.display = "none";
        elem.classList.remove('fadeInDown');
        sunrise.classList.remove('fadeInDown');
    }
}, false);