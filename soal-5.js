
const data = [
    "pro", "gram", "merit", "program", "it", "programmer"
]

function solution(word) {
    
    let split = word.split("")
    let result = []
    let findWord = ""

    split.forEach((val, key) => {
        findWord += val
        data.forEach((valData, keyData) => {
            let rules = new RegExp(valData, "i")
            if (rules.test(findWord)) {
                result.push(valData)
                findWord = ""
            }
        })
    })

    console.log(result.join(","))

}

solution("programmerit")