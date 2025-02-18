function createLogger() {
    const logs = []

    return {
        log: message => {
            logs.push(message)
        },
        getLogs: () => {
            console.log(logs)
        }
    }
}

function createRandomGenerator(min, max) {
    return () => {
        const randomNumber = min + Math.round((max - min) * Math.random())

        return randomNumber
    }
}