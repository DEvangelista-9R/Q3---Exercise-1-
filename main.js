function pow() {
    var vari1 = document.getElementsByName('Var1')[0].value; 
    window.alert(Math.pow(vari1, 2));
}

function calculate(operation) {
            let a = parseFloat(document.getElementById('a').value);
            let result = '';
            
            if (isNaN(a)) {
                result = 'Please enter a valid number!';
            } else {
                switch (operation) {
                    case 'power':
                        result = `Result: ${Math.pow(a, a)}`;
                        break;
                    case 'squareRoot':
                        result = `Result: ${Math.sqrt(a)}`;
                        break;
                    case 'random':
                        result = `Result: ${(Math.random() * a).toFixed(2)}`;
                        break;
                    case 'roundOff':
                        result = `Result: ${Math.round(a)}`;
                        break;
                }
            }
            document.getElementById('result').textContent = result;
        }