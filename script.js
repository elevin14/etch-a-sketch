function add_grid(n) {
    const gridDiv = document.querySelector('.grid');

    for (let j = 0; j < n; j++) {

        const col = document.createElement('div');
        col.setAttribute('class', 'column');

        for (let i = 0; i < n; i++) {

            const box = document.createElement('div');
            box.setAttribute('class', 'square');
            col.appendChild(box);
        }

        gridDiv.appendChild(col)
    }
}

function add_hover_effect(e) {
    e.target.setAttribute('class', e.target.getAttribute('class') + ' mouseOver')
}

function add_hover_effect_rgb(e){
    if(e.target.style.backgroundColor == ''){
        red = Math.floor(Math.random()*255);
        green = Math.floor(Math.random()*255);
        blue = Math.floor(Math.random()*255);
        e.target.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
    }
}

function change_hover_effect(e){
    console.log(e.target.value)
    if(e.target.value = 'baw'){
        console.log('here1')
        current_hover_effect = add_hover_effect
    } else if (e.target.value = 'random'){
        console.log('here2')
        current_hover_effect = add_hover_effect_rgb
    }
}

function reset() {
    current_size = prompt('Enter size of new grid.',current_size);
    if (current_size != null && /^\d+$/.test(current_size)) {
        const gridDiv = document.querySelector('.grid');
        while (gridDiv.firstChild) {
            gridDiv.removeChild(gridDiv.firstChild);
        }
        add_grid(current_size);
        sketch();
    }
}

function erase() {
    const gridDiv = document.querySelector('.grid');
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    add_grid(current_size);
    sketch();
}

function sketch() {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            current_hover_effect(e)
        });
    });
}

current_hover_effect = add_hover_effect
current_size = 16;
add_grid(current_size);
sketch();
document.querySelector('#reset').addEventListener('click', (e) => {
    reset()
});
document.querySelector('#erase').addEventListener('click', (e) => {
    erase()
});
document.querySelector('select').addEventListener('change', (e) => {
    change_hover_effect(e)
});

