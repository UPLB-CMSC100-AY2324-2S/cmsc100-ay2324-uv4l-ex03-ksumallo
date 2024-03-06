function storePassword(_name, pass1, pass2) {
    let creds = {name: _name}

    if (validatePassword(pass1, pass2))
        creds.newpassword = reversePass(pass1)
    else creds.newpassword = pass1

    return creds
}

function validatePassword(confirm, retype) {
    isValid = true

    isValid &= (confirm == retype)

    let upper = 0, lower = 0, nums = 0;
    Array.from(confirm).forEach(c => {
        if (c.toLowerCase() != c.toUpperCase()) {
            if (c === c.toUpperCase()) upper++;
            else if (c === c.toLowerCase()) lower++;
        }
        else if (c == (Number(c))) nums++;
    });

    isValid &= (confirm.length >= 8)

    isValid &= (nums >= 1) && (upper >= 1) && (lower >= 1)

    return isValid;
}

function reversePass(toReverse) {
    let reversed = ''
    for (let i = toReverse.length - 1; i >= 0; --i) {
        reversed += toReverse.charAt(i);
    }
    return reversed;
}

let result = storePassword("John", "Pass1234", "Pass1234")
console.log(result) 
result = storePassword("John", "Pass123", "Pass12345")
console.log(result) 
