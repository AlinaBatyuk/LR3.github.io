

function getNumber() {
    console.log('getNumber')
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber1Element = document.getElementById("randomNumber1");
        randomNumber1Element.textContent = randomNum1;
    return randomNum1;
}


getNumber();
let result = getNumber();
console.log(result)

function getNumber1() {
    console.log('getNumber1')
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2Element = document.getElementById("randomNumber2");
        randomNumber2Element.textContent = randomNum2;
    return randomNum2;
}


getNumber1();
let result1 = getNumber1();
console.log(result1)
const fahrenheitInput = document.getElementById('fahrenheitInput');
        // const celsiusInput = document.getElementById('celsiusInput');

    //   const fahrenheit = fahrenheitInput.value;
    // });
        celsiusInput.addEventListener("click", function () {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            console.log("yes")
            if (!isNaN(fahrenheit) & (result*result1)==fahrenheit) {
                const resultElement1 = document.getElementById("result");
                resultElement1.textContent = "Відповідь правильна";

                //зробити так щоб при натисканні перевірити правильну відаовідь
                // document.write("Відповідь правильна");
            } else {
                const resultElement = document.getElementById("result");
                resultElement.textContent = "Відповідь не правильна, ваша відповідь " + fahrenheit;
                // document.write("Відповідь не правильна, ваша відповідь ", fahrenheit); 
            }
        
    });
        nextInput.addEventListener("click", function () {
            getNumber();
            getNumber1();

    });
        
        // celsiusInput.addEventListener('input', function() {
        //     const celsius = parseFloat(celsiusInput.value);
        //     if (!isNaN(celsius)) {
        //         const fahrenheit = (celsius * 9/5) + 32;
        //         fahrenheitInput.value = fahrenheit.toFixed(2);
        //     } else {
        //         fahrenheitInput.value = '';
        //     }
        // });