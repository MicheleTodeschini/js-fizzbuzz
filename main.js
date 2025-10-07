console.log('it works');


/*
- stampare numeri da 1 a 100
- multipli di 3 stampare fizz
- multipli 5 stampare Buzz
- multipli 15 stampare FizzBuzz

TOOLS

-ciclo for

*/

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} è multiplo di 15`);
    } else if (i % 5 === 0) {
        console.log(`${i} è multiplo di 5`);
        
    }
}

