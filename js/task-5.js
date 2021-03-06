// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let price;
let message;
let country;

let answer = prompt("Введите страну назначения");


if (answer === null) {
    message = "Отменено пользователем!";
    alert(message);
}
else {
    let answerToLowerCase = answer.toLowerCase();
    switch (answerToLowerCase) {

        case "Китай".toLowerCase():
            price = 100;
            country = "Китай"
            break;
    
        case "Чили".toLowerCase():
            price = 250;
            country = "Чили"
            break;
    
        case "Австралия".toLowerCase():
            price = 170;
            country = "Австралию"
            break;
    
        case "Индия".toLowerCase():
            price = 80;
            country = "Индию"
            break;
    
        case "Ямайка".toLowerCase():
            price = 120;
            country = "Ямайку"
            break;

        default:
            message = `В вашей стране доставка не доступна`;
            alert(message);
    }
}
if (!message) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
}