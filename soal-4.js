function solution(num) {

    const convToString = num.toString()
    let splitWithZero = convToString.split("0")
    let result = ""

    splitWithZero.forEach((val, key) => {

        let x = splitWithZero[key].split("")
        result += x.sort().join("")

    })

    return parseInt(result)
}


console.log(solution(5956560159466056))