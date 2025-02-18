function myFilter(array, callback) {
    const filteredArr = []
    
    for (let i = 0; i < array.length; i++) {
        const elem = array[i]

        if (callback(elem)) filteredArr.push(elem)
    }

    return filteredArr
}



const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num > 3;
});
console.log(greaterThanThree); // [4, 5]