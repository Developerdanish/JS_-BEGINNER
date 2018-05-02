let userEmail = 'avc'
let password = '1234'

let userChecker = function(myString) {
    if((myString.include(123)) && (myString.length > 6)){
        return true
    }
    return false
}

let passChecker = function(pass){
    if((pass.include(123)) && (pass.length > 8)){
        return true
    }
    return false
}