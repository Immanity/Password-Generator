
const resultEl = document.getElementById('answer');

var start = document.querySelector('create');

start.addEventListener('click', function() {
    password = generatePassword();
})

const randFunc = {
    lower = 'abcdefghijklmnopqrstuvwxyz',
    upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number = '0123456789',
    symbol = '!@#$%^&*(){}[]=<>/,.'
}
resultEl.innerText = generatePassword();

function generatePassword() {

    var passwordLength = Number(prompt('How mant characters would you like your password to be? (8 - 128)'));
    var password = "";
    if (passwordLength < 8 || passwordLength > 128) {
        alert('Outside of range! (8 - 128)')
    }
    
    if (passwordLength >= 8 && passwordLength <= 128) {
        var upper = confirm('Would you like uppercase letter?');
        var lower = confirm('Would you like lowercase letter?');
        var number = confirm('Would you like numbers?');
        var symbol = confirm('Would you like symbols?');
    }
    
    if (upper != true && lower != true && number != true && symbol != true) {
        alert('You must have at least one charater type.')
    }

    if (upper) {
        password += randFunc.upper;
    }

    if (lower) {
        password += randFunc.lower;
    }

    if (number) {
        password += randFunc.number;
    }
    
    if (symbol) {
        pasword += randFunc.symbol;
    }
    
    var genPass = '';

    for (let i = 0; i < length; i++) {
        genPass += password[Math.floor(Math.random() * passwordCharSet.length)]
    }

	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

