$(function() {
$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 350; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});
});


var width = window.innerWidth,
    height = window.innerHeight,
    ratio = window.devicePixelRatio;
var x = width / 2,
    r = 40,
    step = 0,
    vx = r * 0.2;
var sprites = new Image();
sprites.onload = animate;
sprites.src = "02-animation/shell.png";
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
canvas.width  = width  * ratio;
canvas.height = height * ratio;
canvas.style.width  = width  + "px";
canvas.style.height = height + "px";
context.scale(ratio, ratio);
context.imageSmoothingEnabled = false;
context.fillStyle = "rgba(255, 255, 255, 0.25)";
function animate() {
    draw();
    update();
    requestAnimationFrame(animate);
}
function draw() {
    context.fillRect(0, 0, width, height);
    
    // Affichage
    drawShell(x, height, r, Math.floor(step));
}
function drawShell(x, y, r, step) {
    var s = r/12;
    
    context.drawImage(sprites, 32*step, 0, 32, 32, x - 16*s, y - 26*s, 32*s, 32*s);
}
function update() {
    // Mise à jour des variables
    x += vx;
    
    if (x < r || x > width - r) {
        vx *= -1;
    }
    
    step += 0.3;
    if (step >= 12)
        step -= 12;
}
