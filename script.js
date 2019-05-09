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

function reset() {
    current_size = prompt('Enter size of new grid.');
    console.log(typeof current_size)
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
            add_hover_effect(e)
        });
    });
}

current_size = 16;
add_grid(current_size);
sketch();
document.querySelector('#reset').addEventListener('click', (e) => {
    reset()
});
document.querySelector('#erase').addEventListener('click', (e) => {
    erase()
});

