/********
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

- For Loops
- Array.prototype.push()
********/

function sumPrimes(num) {
  // create empty array to push prime number into
  var primes = [];

  // Sieve of Eratosthenes
  function isPrime(number){
    // loop through numbers up to num
    for(var i = 2; i <= num; i++){
      // find prime numbers
      if(num % i === 0 && num != i){
        return false;
      }
    }
    return true;
  }
  
  // 1 is not prime
  if(num === 1){
    return 0;
  }
  
  // check is number isn't prime and move on to next number
  if(isPrime(num) === false){
    return sumPrimes(num - 1);
  }
  
  // check if number is prime and add to next sequence using recursion
  if(isPrime(num)){
    return num + sumPrimes(num - 1);
  }
}

sumPrimes(10);
