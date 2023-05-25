var limit = 20; // all primes used in the power set will be smaller than limit

//biject P(p) and P(n)
const ppBiject = arr => {
	var bijection = [];
	for (let i=0; i<arr.length; i++) {
  		bijection[i] = [];
  		for (let j=0; j<arr[i].length; j++) {
    			bijection[i].push(primes.indexOf(arr[i][j])+1);
    		}
 	 }
return bijection
}

// biject the squarefrees and the naturals
const sBiject = arr => {
	let j=0, bijection = []
	for (let i=0; i<arr.length; i++) {
  		if (arr[i] === undefined) { } else {
     			 bijection[j] = arr[i];
     			 j++;
   		 }
  	}
return bijection
}

// biject P(p) and the squarefrees
const pBiject = arr => {
	let product = 1, bijection = []
	for (let i=0; i<arr.length; i++) {
  		for (let j=0; j<arr[i].length; j++) {
    			product = product*arr[i][j];
  		}
 	bijection[product] = arr[i];
	product = 1;
  	}
return bijection
}

// generate a powerset as a multidimensional array given an array of numbers
const powerSet = nums => {
	const result = [];
	backtrack([], 0);
	function backtrack(currSet, index) {
		result.push(currSet);
    		for (let i = index; i < nums.length; i++) {
      			backtrack([...currSet, nums[i]], i + 1);
    		}
  	}
return result;
}

// generate an array of primes between 1 and some limit
const generatePrimes = limit => {
	let primes = [];
	for (let i=2; i<=limit; i++) {
  		if(isPrime(i))
    			primes.push(i);
  	}
return primes
}

// determine if a number is prime
const isPrime = num => {
	for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        	if(num % i === 0) return false;
   	}
return num > 1;
}

const primes = generatePrimes(limit)
console.log(ppBiject(sBiject(pBiject(powerSet(primes)))))
