let v = document.querySelector('input#numb');
let btn = document.querySelector('input#btnPalpite');
let pAnt = document.querySelector('p#pAnt');
let pGame = document.querySelector('p#pGame');
let pAoB = document.querySelector('p#pAoB');

let randNum = Math.floor(Math.random() * 100) + 1;
let cont = 0;
let arr = [];

function addNum() {
    if (isNum(v.value) && !inList(Number(v.value), arr)) {
        arr.push(Number(v.value))

        if (cont == 0) {
            pAnt.innerHTML = 'Palpite anterior:' + ' ';
        }
        pAnt.innerHTML += `${arr[cont]}` + ' ';

        if (v.value == randNum) {
            pGame.innerHTML = 'Winner!';
            pGame.style.background = 'green';
            pAoB.innerHTML = '';
            newgame();
        } else if (cont == 9) {
            pGame.innerHTML = 'Game Over!';
            pGame.style.background = 'red';
            pAoB.innerHTML = '';
            newgame();
        } else {
            if (v.value < randNum) {
                pAoB.innerHTML = 'Palpite está baixo.';
            } else {
                pAoB.innerHTML = 'Palpite está alto';
            }
        }
        cont++;
    } else {
        alert('[ERRO] Número inválido ou já lançado.');
    }
}

function inList(n, list) {
    if (list.indexOf(n) != -1) {
        return true;
    } else {
        return false;
    }
}

function isNum(n) {
    if (n >= 1 && n <= 100) {
        return true;
    } else {
        return false;
    }
}

function newgame() {
    v.disabled = true;
    btn.disabled = true;
    var btnnew = document.createElement('button');
    btnnew.textContent = 'Novo Jogo';
    btnnew.setAttribute("id", "botao");
    document.getElementById('pAoB').appendChild(btnnew);
    btnnew.addEventListener('click', config);
}

function config() {
    v.disabled = false;
    btn.disabled = false;
    v.value = '';
    v.focus();
    cont = 0;
    arr = [];
    pAnt.innerHTML = '';
    pGame.innerHTML = '';
    pGame.style.background = 'white';
    randNum = Math.floor(Math.random() * 100) + 1;
    /*btnnew.parentNode.removeChild(btnnew)*/
    document.getElementById('botao').remove();
}