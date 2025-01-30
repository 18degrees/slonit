function getValuesOfObjSum(obj) {
    let sum = 0

    for (const value of Object.values(obj)) {
        if (typeof value === 'number') {
            sum += value
        }
    }
    return sum
}


function getSortedObjStrings(obj) {
    const roughArr = Object.entries(obj)

    const numberEntriesArr = []

    for (const arr of roughArr) {
        const value = arr[1]
    
        if (typeof value === 'number') numberEntriesArr.push(arr)

    }

    numberEntriesArr.sort((a, b) => {
        const valueA = a[1]
        const valueB = b[1]

        return valueB - valueA
    })

    const sortedStringsArr = numberEntriesArr.map(arr => arr[0])

    console.log(sortedStringsArr)
}