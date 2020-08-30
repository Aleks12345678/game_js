'use strict';

let randomNumber = Math.floor(Math.random() * 100) + 1;// рандомное число
function restart (rand, attempts = 10 ) {

let userEntered = prompt('Введите число. У Вас '+attempts+' попыток');
        
        if (attempts === 0) {
            alert('Попытки закончились'); //закончились попытки
            return false;
        }
        
        if (isNaN(userEntered)) {
            alert('Введи число!');//проверка на число
        }
        
        if (userEntered === null) {

        }  

        if (userEntered == randomNumber) {
            alert('Верно, Вы угадали загаданное число!');
            return false;
    
        } else if (userEntered < randomNumber) {
            alert('Загаданное число больше!');
                
        } else if (userEntered > randomNumber) {
            alert('Загаданное число меньше!');
        }
        attempts--;
        
        restart(rand, attempts);
    }
    restart(randomNumber, 10);
        

