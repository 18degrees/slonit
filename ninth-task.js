function mySlice(arr, start = 0, end = arr.length) {

    //приводим отрицательные значения к привычным индексам
    start = start < 0 ? arr.length + start : start
    end = end < 0 ? arr.length + end : end

    const slicedArr = []

    arr.forEach((elem, index) => {
        if (index >= start && index < end) slicedArr.push(elem)
    })
    return slicedArr
}

function myIndexOf(arr, item, from = 0) {
    for (const index of arr) {
        if (index < from) continue

        if (arr[index] === item) return index
    }
    return -1
}

function myIncludes(arr, item, from) {
    for (const index of arr) {
        if (index < from) continue

        if (arr[index] === item) return true
    }
    return false
}