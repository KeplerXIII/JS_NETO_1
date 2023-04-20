let checker = true
alert("Сыграем в игру, я загадаю число а тебе, мой друг, надо его угадать. На всё провсё 3 попытки.")

while (checker) {

    const randomNumber = Math.floor(Math.random() * 1000);
    let i = 3
    console.log(randomNumber)

    while (i > 0) {

        let numberFromUser = prompt("Введите число от 0 до 999")
        console.log(i)

        if (isNaN(+numberFromUser) || (+numberFromUser < 0 || +numberFromUser > 999) || numberFromUser === "") {
            alert('Некорректный ввод!')
            break
        } 
        
        else if (+numberFromUser > randomNumber ) {
            i = i - 1
            alert(`Загаданное число меньше. Попыток осталось: ${i}.`)
        } 
        
        else if (+numberFromUser < randomNumber ) {
            i = i - 1
            alert(`Загаданное число больше. Попыток осталось: ${i}.`)
        } 
        
        if (+numberFromUser === randomNumber) {
            alert('Угадал! Возьми печеньку!')
            i = 3
            break
        } 
    }

    if (i === 0) {
        alert('Не повезло, в этот раз без печенек!')
        i = 3
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





