export default function FizzBuzz (number) {
    let text;
    if (number % 3 === 0 && number % 5 === 0) {
        text = 'FizzBuzz';
    } else if (number % 3 === 0) {
        text = 'Fizz';
    } else if (number % 5 === 0) {
        text = 'Buzz';
    }
    return text;
} 
    

