// _______________________task1_______________________

let field1 = document.querySelector(".text-field1");
let field2 = document.querySelector(".text-field2");
let btn1 = document.querySelector(".btn1");
let result1 = document.querySelector(".result1");

btn1.addEventListener("click", () => {
    if (field1.textContent !== "" && field2.textContent !== "") {
        result1.textContent = "Обидва поля заповнені"
    } else {
        result1.textContent ="Не всі поля заповнені"
    }
})

// _______________________task2_______________________

let num1 = document.querySelector(".number1");
let num2 = document.querySelector(".number2");
let btn2 = document.querySelector(".btn2");
let result2 = document.querySelector(".result2");

btn2.addEventListener("click", () => {
    let num1Value = parseFloat(num1.value);
    let num2Value = parseFloat(num2.value);

    if (num1Value + num2Value > 10) {
        result2.textContent = "Amount is more than 10";
    } else {
        result2.textContent = "Amount is 10 or less";
    }
})

// _______________________task3_______________________

let toCheck = document.querySelector(".to-check");
let btn3 = document.querySelector(".btn3");
let result3 = document.querySelector(".result3");

btn3.addEventListener("click", () => {
    if (toCheck.value.includes("JavaScript")) {
        result3.textContent = "Text includes word `JavaScript`";
    } else {
        result3.textContent = "Text doesn`t include word `JavaScript`";
    }
})

// _______________________task4_______________________

let num3 = document.querySelector(".number3");
let btn4 = document.querySelector(".btn4");
let result4 = document.querySelector(".result4");

btn4.addEventListener("click", () => {
    let num3Value = parseFloat(num3.value);

    if (num3Value > 10 && num3Value < 20) {
        result4.textContent = "Your number is more than 10 and less than 20";
    } else {
        result4.textContent = "Your number isn`t more than 10 and less than 20";
    }
})


// _______________________task5_______________________

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let btn5 = document.querySelector(".btn5");
let result5 = document.querySelector(".result5");

btn5.addEventListener("click", () => {
    if (name.value.length >= 3 && email.value.includes("@.") && password.value.length >= 6) {
        // btn5.setAttribute("href", "https://www.google.com/");
        window.location.href = "https://www.google.com";
    } else {
        result5.textContent = "Error";
    }
})