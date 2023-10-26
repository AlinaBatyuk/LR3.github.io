const randomNum1 = Math.floor(Math.random() * 10) + 1;
const randomNumber1Element = document.getElementById("randomNumber1");
    randomNumber1Element.textContent = randomNum;
const randomNum2 = Math.floor(Math.random() * 10) + 1;
const randomNumber2Element = document.getElementById("randomNumber2");
    randomNumber2Element.textContent = randomNum;


const fahrenheitInput = document.getElementById('fahrenheitInput');
        // const celsiusInput = document.getElementById('celsiusInput');
    celsiusInput.addEventListener("click", function () {
      const fahrenheit = fahrenheitInput.value;
        
        fahrenheitInput.addEventListener('input', function() {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            console.log("yes")
            if (!isNaN(fahrenheit) & (randomNum1*randomNum2)==fahrenheit) {

                //зробити так щоб при натисканні перевірити правильну відаовідь
                document.write("Відповідь правильна");
                // const celsius = (5/9) * (fahrenheit - 32);
                // celsiusInput.value = celsius.toFixed(2); // Виводимо результат з округленням до двох знаків після коми
            } else {
                document.write("Відповідь не правильна ", fahrenheit); // Якщо введене значення не є числом, очищаємо поле для Цельсія
            }
        });
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