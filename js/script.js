"use strict";

const num = 50;

// (num == 50) ? console.log('Ok!') : console.log('Error');

switch (num) {
    case 49:
        console.log('Неверено');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку');                
        break;
    default:
        console.log('Не в этот раз');
        break;        
}