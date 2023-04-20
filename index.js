let checker = true





while (checker) {

    const randomNumber = Math.floor(Math.random() * 1000);

    let i = 3





    console.log(randomNumber)





    let numberFromUser = prompt("Я загадал число, угадай его, у тебя 3 попытки! От 0 до 999")





    while (i > 0) {

        console.log(i)

        if (isNaN(+numberFromUser) || (+numberFromUser < 0 || +numberFromUser > 999) || numberFromUser === "") {

            alert('Некорректный ввод!')

            break

        } else if (+numberFromUser > randomNumber ) {

            alert('Загаданное число меньше, попробуй еще раз!')

            numberFromUser = prompt("Введите число от 0 до 999")

            i = i - 3

        } else if (+numberFromUser < randomNumber ) {

            alert('Загаданное число больше, попробуй еще раз!')

            numberFromUser = prompt("Введите число от 0 до 999")

            i = i - 3

        } else if (+numberFromUser === randomNumber) {

            alert('Угадал! Возьми печеньку!')

            i = 3

            break

        }

    }

   

    if (i === 1) {

        alert('Не повезло, в этот раз без печенек!')

    }

    if (i === 3) {

        let userAnswer = confirm("Хотите снова попытать счастье?")

        if (userAnswer) {

            checker = true

            alert("Ура! Продолжаем!");

          } else {

            checker = false

            alert("Жаль, игра окончена(");

          }

        i = 3

    }





}





