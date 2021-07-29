var inquirer = require('inquirer');

const fibonacci = (n) => {
    if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else {
        return n;
    }
}

module.exports.generateFibonacci = (question) => {
    let resultSet = [];
    return inquirer.prompt(question)
        .then(result => {
            if (result.range <= 0) {
                return 'Enter value which is greater than 0.';
            }
            else if (!parseInt(result.range)) {
                return 'Value cannot be a string/charecter.';
            }
            else {
                for (let i = 0; i < result.range; i++) {
                    resultSet.push(fibonacci(i));
                }
                return resultSet;
            }
        })
}

