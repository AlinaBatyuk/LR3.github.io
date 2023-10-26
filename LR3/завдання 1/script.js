const fahrenheitInput = document.getElementById('fahrenheitInput');
        const celsiusInput = document.getElementById('celsiusInput');
        
        fahrenheitInput.addEventListener('input', function() {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            if (!isNaN(fahrenheit)) {
                const celsius = (5/9) * (fahrenheit - 32);
                celsiusInput.value = celsius.toFixed(2); // Виводимо результат з округленням до двох знаків після коми
            } else {
                celsiusInput.value = ''; // Якщо введене значення не є числом, очищаємо поле для Цельсія
            }
        });
        
        celsiusInput.addEventListener('input', function() {
            const celsius = parseFloat(celsiusInput.value);
            if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9/5) + 32;
                fahrenheitInput.value = fahrenheit.toFixed(2);
            } else {
                fahrenheitInput.value = '';
            }
        });