let button1 = document.body.children[2].children[4];
// button1.style.color = 'red';

let button2 = document.getElementById('btn1');
// button2.style.color = 'red';

let thirdPara = document.getElementById('third-para');
let fourthPara = document.getElementById('fourth-para');

function clickBtn1() {
    let firstClick = thirdPara
    firstClick.remove()
    // console.dir(button1)
}

function clickBtn2() {
    let secondClick = fourthPara
    secondClick.style.backgroundColor = 'blue'
    secondClick.style.color = 'white'
    // console.dir(button2)
}

button1.addEventListener('click', clickBtn1);
button2.addEventListener('click', clickBtn2);

