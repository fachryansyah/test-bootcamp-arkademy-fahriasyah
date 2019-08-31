function isPrimeNumber(num){

    for (var i=2; i<=num; i++) {
        if((num%i===0)){
            return false
        }
    }

    return arr
}

function triangle(num) {
    
    let triangle = ""

    for (var i = 0; i < num; i++) {
        for (var j = 0; j < i; j++) {
            if (j%2 === 0 || j%3 === 0 && j%2 === 0) {
                continue
            }
            triangle += j+" "
        }
        console.log(triangle)
        triangle = ""
    }
}

triangle(10)
//console.log(isPrimeNumber(5))
