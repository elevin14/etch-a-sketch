function add_grid() {
    const gridDiv = document.querySelector('.grid');

    for (let j = 0; j < 16; j++) {

        const col = document.createElement('div');
        col.setAttribute('class', 'column');

        for (let i = 0; i < 16; i++) {

            const box = document.createElement('div');
            box.setAttribute('class', 'square');
            col.appendChild(box);
        }

        gridDiv.appendChild(col)
    }
}

function add_hover_effect(e) {
    e.target.setAttribute('class', e.target.getAttribute('class')+' mouseOver')
}

add_grid()

const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        add_hover_effect(e)
    });
});