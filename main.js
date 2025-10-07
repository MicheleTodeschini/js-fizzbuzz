console.log('it works');


/*
- stampare numeri da 1 a 100
- multipli di 3 stampare fizz
- multipli 5 stampare Buzz
- multipli 15 stampare FizzBuzz

TOOLS

-ciclo for
-math
-if
-if else
-else 


*/

for (let i = 1; i <= 100; i++){
    // this is for numbers divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}FizzBuzz`);
    } else if (i % 5 === 0) {
        // this is for numbers divisible 5
        console.log(`${i}Buzz`);
    } else if (i % 3 === 0) {
        // this is for numbers divisible 3
        console.log(`${i}Fizz`);
        
    } else {
        //per tutti gli altri numeri 
        console.log(i);
        
    }
}

