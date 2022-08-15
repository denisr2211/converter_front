window.onload = function () {
    let UNITVALUES = {
        'm':1, 
        'mm':1000, 
        'cm':100, 
        'in':39.37, 
        'ft':3.28
    }; // Устанавливаем конвертор

    console.log(UNITVALUES);

    let distance = document.getElementById('dist'); // Получаем элемент ввода данных
    let unitsFrom = document.getElementById('unitsFrom'); // Получаем первый селект
    let unitsTo = document.getElementById('unitsTo'); // Получаем второй селект
    let result = document.getElementById('result'); // Получаем поле куда будем писать результат



    function calculate() {

        let distanceVal = distance.value;
        let unitsFromVal = unitsFrom.value;
        let unitsToVal = unitsTo.value;

        let inputMeters = distanceVal/UNITVALUES[unitsFromVal];
        let outputResult = inputMeters * UNITVALUES[unitsToVal];
        result.innerText = outputResult;

        console.log(outputResult);
    
    }
    distance.oninput = function () { // При вводе данных в поле вызываем функцию.
        calculate();
    };
    unitsFrom.onchange = function () { // При смене первого селекта вызываем функцию.
        calculate();
    };
    unitsTo.onchange = function () { // При смене второго селекта вызываем функцию.
        calculate();
    };
};
