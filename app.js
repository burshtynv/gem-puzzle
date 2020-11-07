const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    left: 0,
    top: 0
};

for (let i = 1; i <= 15; i++){
    const cell =  document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = i;




    const left = i % 4;
    const top = (i - left) / 4;  

    cell.style.left = `${left * cellSize}px`
    cell.style.top = `${top * cellSize}px`


    field.append(cell);
}