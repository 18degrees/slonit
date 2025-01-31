function upperCaseFirstLetter(str) {
    const upperCaseFirstLetter = str[0].toUpperCase()

    return upperCaseFirstLetter + str.slice(1)
}

function sliceString(str, length = str.length) {
    const slicedRoughStr = str.slice(0, length)

    let exactSlicePoint = 0

    for (let i = slicedRoughStr.length - 1; i > 0; i--) {
        const char = slicedRoughStr[i]

        const isItEndPoint = /[,.!?:; ]/.test(char)

        if (isItEndPoint) {
            exactSlicePoint = i
            break
        }
    }
    const accurateSlicedString = slicedRoughStr.slice(0, exactSlicePoint)

    return accurateSlicedString.trim() + '…'
}


function isSubStr(str1, str2) {
    return str1.includes(str2) || str2.includes(str1)
}

console.log(isSubStr('42', '3423342333'))