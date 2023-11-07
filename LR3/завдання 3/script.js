function getNumber() {
    console.log('getNumber')
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber1Element = document.getElementById("randomNumber1");
        randomNumber1Element.textContent = randomNum1;
    return randomNum1;
}


getNumber();
let result = getNumber();


function getNumber1() {
    console.log('getNumber')
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2Element = document.getElementById("randomNumber2");
        randomNumber2Element.textContent = randomNum2;
    return randomNum2;
}


getNumber1();
let result1 = getNumber1();

nextInput.addEventListener("click", function () {
        location.reload()
        getNumber();
        getNumber1();
        getNumber2();
        getNumber3();
        getNumber4();
        getNumber5();
});

function getNumber2() {
    console.log('getNumber2')
    const randomNum3 = Math.floor(Math.random() * 100) + 1;
    const randomNumber3Element = document.getElementById("randomNumber3");

        randomNumber3Element.querySelector('span').textContent = randomNum3;
        randomNumber3Element.querySelector('input').value = randomNum3;
    return randomNum3;
}


getNumber2();
let result2 = getNumber2();


function getNumber3() {
    console.log('getNumber3')
    const randomNum4 = Math.floor(Math.random() * 100) + 1;
    const randomNumber4Element = document.getElementById("randomNumber4");
        
        randomNumber4Element.querySelector('span').textContent = randomNum4;
        randomNumber4Element.querySelector('input').value = randomNum4;
    return randomNum4;
}


getNumber3();
let result3 = getNumber3();

function getNumber4() {
    console.log('getNumber4')
    const randomNum5 = Math.floor(Math.random() * 100) + 1;
    const randomNumber5Element = document.getElementById("randomNumber5");
        
        randomNumber5Element.querySelector('span').textContent = randomNum5;
        randomNumber5Element.querySelector('input').value = randomNum5;
    return randomNum5;
}


getNumber4();
let result4 = getNumber4();


function getNumber5() {
    const randomNum6 = Math.floor(Math.random() * 100) + 1;
    const randomNumber6Element = document.getElementById("randomNumber6");
        
        randomNumber6Element.querySelector('span').textContent = randomNum6;
        randomNumber6Element.querySelector('input').value = randomNum6;
    return randomNum6;
}


getNumber5();
let result5 = getNumber5();


const i = Math.floor(Math.random() * 3);
const radios = document.querySelectorAll('input[type="radio"]')
radios[i].value = (result*result1);
radios[i].nextElementSibling.textContent = result*result1

const fahrenheitInput = document.getElementById('fahrenheitInput');
        celsiusInput.addEventListener("click", function () {
            for (let element of radios){
              if (element.checked) {
                if((result*result1)==element.value){
                    const resultElement = document.getElementById("result");
                    resultElement.textContent = "Відповідь правильна, ваша відповідь " + element.value;
                } else {
                    const resultElement = document.getElementById("result");
                    resultElement.textContent = "Відповідь не правильна, правильна відповідь " + (result*result1);
                }
              }
            }
        
    });