// Створити масив із числами від 1 до 10.

// За допомогою циклу for пройтися по масиву
// та вивести на екран всі числа, крім числа 7.

// Якщо зустрінете число 7, закінчити виконання
// циклу за допомогою оператора break.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    break;
  }
  console.log(numbers[i]);
}