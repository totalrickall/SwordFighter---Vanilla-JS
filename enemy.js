
function enemy() {
    let div = document.createElement('div');
    div.setAttribute('id', 'enemy');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.position = 'relative';
    div.style.backgroundColor = 'red';

    div.style.left = '500px';
    div.style.bottom = '0px';

    x.appendChild(div);

    $('#enemy').each(function () {
        var position = $(this).position();
        console.log('ENEMY: ', "top: " + position.top + " left: " + position.left);
    });



};