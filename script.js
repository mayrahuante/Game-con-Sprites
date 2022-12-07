const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

var tecla = 0;

//vamos a llamar a la imagen que hara la animación.
const player = new Image();
player.src = 'shadow_dog.png';

let frameX = 0;
let frameY = 0;
let repetitions = 6;

const spriteWidth = 575;
const spriteHeight = 523;

function animateTwo(key) {
    switch (key.toLowerCase()) {
        case 'q':
            frameY = 1;
            repetitions = 6;
            break;
        case 'w':
            frameY = 2;
            repetitions = 6;
            break;
        case 'e':
            frameY = 3;
            repetitions = 8;
            break;
        case 'r':
            frameY = 4;
            repetitions = 10;
            break;
        case 't':
            frameY = 5;
            repetitions = 4;
            break;
        case 'y':
            frameY = 6;
            repetitions = 6;
            break;
        case 'u':
            frameY = 7;
            repetitions = 6;
            break;
        case 'i':
            frameY = 8;
            repetitions = 11;
            break;
        case 'o':
            frameY = 9;
            repetitions = 3;
            break;
        case 'p':
            frameY = 0;
            repetitions = 6;
            break;

       
    }
}

window.addEventListener('keydown', e => {
    console.log(e.key);
    animateTwo(e.key);
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(player, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);

    if (frameX < repetitions) frameX++
    else frameX = 0;
    requestAnimationFrame(animate);
}

animate();