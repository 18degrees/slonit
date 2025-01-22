function play(binarySearch = true) {
    const originalNumber = getRandomNumber()

    console.log(`Компьютер A загадал число ${originalNumber}\n`)

    let start = 0
    let end = 100

    while (true) {
        const estimatedNumber = binarySearch ? start + Math.trunc((end - start) / 2) : getRandomNumber(start, end)

        console.log(`Компьютер Б: пробует ${estimatedNumber}`)

        if (originalNumber === estimatedNumber) {
            console.log(`Компьютер A: верно!`)
            break
        }
        if (originalNumber > estimatedNumber) {
            console.log(`Компьютер A: больше\n`)

            start = estimatedNumber
        }
        if (originalNumber < estimatedNumber) {
            console.log(`Компьютер A: меньше\n`)
            end = estimatedNumber
        }

    }
}

//Параметры нужны, если поиск идёт не бинарным методом
function getRandomNumber(start = 0, end = 100) {
    const randomNumber = Math.ceil(Math.random() * (end - start)) + start

    //Также проверка для не бинарного поиска.
    //Поскольку случайное число округляется вверх, 
    //возможно, что оно будет равно end, если start = 0
    return randomNumber === end ? randomNumber - 1 : randomNumber
}

play()