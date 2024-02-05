const calculator = (num1, num2, operand) => {
    switch (operand) {
        case '+':
            console.log(num1 + num2);
        break;
        case '-':
            console.log(num1 - num2);
        break;
        case '*':
            console.log(num1 * num2);
        break;
        case '/':
            console.log(num1 / num2);
        break;
        default:
            console.log('invalid operation')
    }
}

const names = ['brad', 'sara']

for (i=1; i<=100; i++){
    if(i%3 ===0 && i%5 === 0)
    {
        console.log('fuzzbuzz');
        
        continue;
    }
    else if (i%3 === 0)
    {
        console.log('fuzz');
        continue;
    }
    else if (i%5 === 0)
    {
        console.log('buzz');
        continue;
    }
    else{
    console.log(i);
    }
}