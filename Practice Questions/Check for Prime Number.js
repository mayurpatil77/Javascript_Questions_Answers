function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const inputNumber = 7;
  const isPrimeResult = isPrime(inputNumber);
  console.log(isPrimeResult); // Output: true
  