// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

let total = 0;
let message;

do {
   let userInput = prompt("Введите число");

    if (userInput === null) {
        break;
    }

    userInput = Number(userInput);

    const notANumber = Number.isNaN(userInput);

    if (notANumber) {
        message = "Было введено не число, попробуйте еще раз";
        alert(message)
        continue;

    }

    total += userInput;

} while (true);
   
message = `Общая сумма чисел равна ${total}`;
alert(message);


