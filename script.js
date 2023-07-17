const container = document.getElementById('container');
const inputBtn = document.querySelector('.input');

inputBtn.addEventListener('click', function(){
    let value = prompt('Please enter a number from 1-100.');
    if(value > 100){
        alert('The number must be between 1-100.');
    }
    else if(value <= 100 && value > 0){
    function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
        function func(){
            cell.style.backgroundColor = 'black';
            cell.style.opacity = (parseFloat(cell.style.opacity) || 0) + 0.1;
            /*USE BELOW FOR RANDOM RGB:
            const randomColor = () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                return 'rgb(' + r + ',' + g + ',' + b + ')';
            }
            console.log(randomColor());
            cell.style.backgroundColor = randomColor();
            */
        }
        cell.addEventListener('mouseover', func, false);
        inputBtn.style.display = 'none';
        const reloadBtn = document.querySelector('.reload');
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    }
    makeRows(value, value);
}})
