// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function


function getRandomNumber(){
    return new Promise(function(myResolve, myReject) {
        setTimeout(function() { 
            let num = Math.floor((Math.random() * 100) + 1);

            myResolve(num);        
        }, 500);
    });
}

async function callFunc(){
    let randomPromise = await getRandomNumber();
        console.log(randomPromise);
}

callFunc();

      
  







