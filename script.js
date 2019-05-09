function add_grid() {
    const gridDiv = document.querySelector('.grid');

    for (let j = 0; j < 16; j++) {

        const col = document.createElement('div')

        for (let i = 0; i < 16; i++) {

            const box = document.createElement('div');
            box.setAttribute('class', 'square');
            col.appendChild(box);
        }

        gridDiv.appendChild(col)
    }

}

add_grid()

const buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, computerPlay())
    });
});