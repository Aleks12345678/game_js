'use strict';
function restart (attempts = 10 ) {

    let randomNumber = Math.floor(Math.random() * 100) + 1;// рандомное число

    // let attempts = 10; //кол-во попыток

    let userEntered = prompt('Введите число. У Вас 10 попыток');
   
    function guessing () {
        attempts--;
        
        if (attempts === 0) {
            alert('Попытки закончились'); //закончились попытки
            
        }
        
        if (isNaN(userEntered)) {
            alert('Введи число!');//проверка на число
        }
        
        if (userEntered === null) {

        }  

        if (userEntered == randomNumber) {
            alert('Верно, Вы угадали загаданное число!');
            
    
        } else if (userEntered < randomNumber) {
            alert('Загаданное число больше! Осталось попыток: ' + attempts);
            userEntered = +prompt('Введите число');
            
    
        } else if (userEntered > randomNumber) {
            alert('Загаданное число меньше! Осталось попыток: ' + attempts);
            userEntered = +prompt('Введите число');           
        }
        
    
        

        return guessing();
    }
    guessing();
        
}
restart();