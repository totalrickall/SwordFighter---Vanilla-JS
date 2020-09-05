console.log("tesging");
const speed = 30;
let x = document.getElementById('main-container');

// MOVE RIGHT ON RIGHT ARROW
function moveRight() {
    let char = document.getElementById('character');
    let curr = parseInt(char.style.left);
    char.style.left = (curr + speed) + 'px';
}

// MOVE LEFT ON LEFT ARROW
function moveLeft() {
    let char = document.getElementById('character');
    let curr = parseInt(char.style.left)
    char.style.left = (curr - speed) + 'px';
}
// MOVE UP ON UP ARROW
function moveUp() {
    let char = document.getElementById('character');
    let curr = parseInt(char.style.bottom)
    char.style.bottom = (curr + speed) + 'px';
}
// MOVE DOWN ON DOWN ARROW
function moveDown() {
    let char = document.getElementById('character');
    let curr = parseInt(char.style.bottom)
    char.style.bottom = (curr - speed) + 'px';
}

function character() {
    div.setAttribute('id', 'character');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.position = 'relative';
    div.style.backgroundColor = 'black';

    div.style.left = '0px';
    div.style.bottom = '0px';

    x.appendChild(div);

    document.addEventListener('keydown', (e) => {
        if (e.which === 39) moveRight();
        if (e.which === 37) moveLeft();
        if (e.which === 38) moveUp();
        if (e.which === 40) moveDown()
    });

    $('#character').each(function () {
        var position = $(this).position();
        console.log('CHARACTER: ', "top: " + position.top + " left: " + position.left);
    });
};



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');
    { character() };
    { enemy() }

});