const criminal = document.getElementById('criminal');
const police = document.getElementById('police');
const gameArea = document.getElementById('gameArea');
const status = document.getElementById('status');

let criminalPos = { x: 50, y: 180 };
let policePos = { x: 500, y: 180 };
const speed = 10;

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (criminalPos.y > 0) criminalPos.y -= speed;
            break;
        case 'ArrowDown':
            if (criminalPos.y < gameArea.clientHeight - 40) criminalPos.y += speed;
            break;
        case 'ArrowLeft':
            if (criminalPos.x > 0) criminalPos.x -= speed;
            break;
        case 'ArrowRight':
            if (criminalPos.x < gameArea.clientWidth - 40) criminalPos.x += speed;
            break;
    }
    updatePositions();
});

function updatePositions() {
    criminal.style.left = criminalPos.x + 'px';
    criminal.style.top = criminalPos.y + 'px';
}

function chaseCriminal() {
    if (policePos.x > criminalPos.x) policePos.x -= 2;
    if (policePos.x < criminalPos.x) policePos.x += 2;
    if (policePos.y > criminalPos.y) policePos.y -= 2;
    if (policePos.y < criminalPos.y) policePos.y += 2;

    police.style.left = policePos.x + 'px';
    police.style.top = policePos.y + 'px';

    checkCollision();
}

function checkCollision() {
    const dx = criminalPos.x - policePos.x;
    const dy = criminalPos.y - policePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 40) {
        alert('Caught! Game Over.');
        resetGame();
    }
}

function resetGame() {
    criminalPos = { x: 50, y: 180 };
    policePos = { x: 500, y: 180 };
    updatePositions();
}

setInterval(chaseCriminal, 50);
updatePositions();
