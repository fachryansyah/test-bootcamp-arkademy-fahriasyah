function isUsernameValid(username) {

    const rules = /^[^\W)(][\w]/i

    if (username.length > 9) {
        return false
    }else if (username.length < 5) {
        return false
    }

    if (rules.test(username)) {
        return true
    }else{
        return false
    }
}

function isPasswordValid(password) {

    const isThereChar = /[a-zA-Z]/
    const isThereNumeric = /[0-9]/
    const isThereEqual = /[=]/

    if (password.length < 8) {
        return false
    }

    let isValid = isThereChar.test(password) && isThereNumeric.test(password) && isThereEqual.test(password)
    return isValid
}

let username = "lawliet"
let password = "samehadaku1337="

console.log(`Username : ${username} (${isUsernameValid(username)})`)
console.log(`Password : ${password} (${isPasswordValid(password)})`)
