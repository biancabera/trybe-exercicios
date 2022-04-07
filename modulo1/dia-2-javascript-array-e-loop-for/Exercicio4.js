let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaDeTodosOsNumeros = 0; 

for(let index = 0; index < numbers.length; index += 1) { 
    somaDeTodosOsNumeros = somaDeTodosOsNumeros + numbers[index]; 
} 
let media = somaDeTodosOsNumeros / 10;

console.log(media); 

if (media > 20) {console.log('valor maior que 20')
    } else { 
     console.log('valor menor ou igual a 20')
    }