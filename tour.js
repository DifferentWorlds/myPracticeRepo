document.addEventListener("DOMContentLoaded", function () {
const Nobutton = document.getElementById('no-btn');
Nobutton.addEventListener('mouseover', function () {
    Nobutton.style.left = `${Math.ceil(Math.random() * 90)}%`;
    Nobutton.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

const Yesbutton = document.getElementById('yes-btn');
Yesbutton.addEventListener('click', function () {
    window.location.href="lezgo.html"
})
})
