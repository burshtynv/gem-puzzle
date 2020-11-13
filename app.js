const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    value: 0,
    left: 0,
    top: 0
};

const cells = [];
cells.push(empty);

function move(index) {

    const cell = cells[index];

    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff =  Math.abs(empty.top - cell.top);

    if(leftDiff + topDiff > 1){
        return;
    }

    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinished = cells.every(cell => {
        return cell.value === cell.top * 4 + cell.left;
    });

    if (isFinished){
        alert ('you are win');
    }
}

const numbers = [...Array(15).keys()]
.sort(() => Math.random() - 0.5);

for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1 
    cell.className = 'cell';
    cell.innerHTML = value;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
    });

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
        move(i);
    })

    let click = 0;

    field.addEventListener('click', () =>{
        click += 1;
        document.getElementById("click").innerHTML = click;
        
    } )

    // AUDIO
    function setupSynth() {
        window.synth = new Tone.Synth({
          oscillator: {
            type: 'sine',
            modulationFrequency: 0.5
          },
          envelope: {
            attack: 0,
            decay: 0.2,
            sustain: 0,
            release: 0.5,
          }
        }).toMaster();
      }
       
      function boopMe() {
        if (!window.synth) {
          setupSynth();
        }
        
        window.synth.triggerAttackRelease(600, '9n');
      }
       
      cell.addEventListener('touchstart', function(e) {
        e.stopPropagation();
        e.preventDefault();
        boopMe();
      });
      cell.addEventListener('mousedown', boopMe);

   // Timer 
   (function(){

const hour = document.getElementById('hour');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
let S = '', M = '', H = '00';

setInterval(function(){
  //Плюсик перед строкой преобразует его в число
  S = +S +1;
  //Если результат меньше 10, прибавляем впереди строку '0'
  if( S < 10 ) { S = '0' + S; }
  if( S == 60 ) {
    S = '00';
    //Как только секунд стало 60, добавляем +1 к минутам
    M = +M + 1;
    //Дальше то же самое, что и для секунд
    if( M < 10 ) { M = '0' + M; }
    if( M == 60 ) {
      //Как только минут стало 60, добавляем +1 к часам.
      M = '00';
      H = +H + 1;
      if( H < 10 ) { H = '0' + H; }
    }
  }
  secs.innerText = S;
  mins.innerText = M;
  hour.innerText = H;
  //Тикает всё через одну функцию, раз в секунду.
},1000);

})();

   

}