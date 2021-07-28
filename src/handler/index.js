var prompt = require('prompt');

function fibonacci(n) {
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else {
        return n;
    }
}

prompt.start();
prompt.get('range', function (err, result) {
    if (result.range <= 0) {
        console.log('Enter value which is greater than 0.');
    }
    else {
        for (let i = 0; i < result.range; i++) {
            console.log(fibonacci(i));
        }
    }
});


