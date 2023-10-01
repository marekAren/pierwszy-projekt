let name = 'Hans';

name = 'Monika';

let number = 8;

let boolean = false;

let array = [1, 2, 3, 108];

let objectH1 = document.querySelector('h1');

objectH1.innerText = 'Kurs Javascript';

// if (number === 108) {
//     console.log("Spełniony warunek number === 108");
// } else if (number === 110) {
//     console.log("Spełniony warunek number === 110");
// } else {
//     console.log("Żaden z powyższych warnunków nie został spełniony!");
// }

let result = number * 2;

let numberTxt = '9';

if (number !== numberTxt) {
    // console.log("Wartości zmiennych i są NIE równe");
}

function multiply(num1, num2) {
    let result = num1 * num2;

    return result;
}

// console.log( multiply(2, 3) );

let wynikMnozenia = multiply(number, 2);

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hans - JS - Click';

myHeading.onclick = function() {
    alert("Właśnie kliknąłeś tekst nagłówka <h1>");
}

console.log(myHeading);