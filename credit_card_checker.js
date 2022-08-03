// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6, 8];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4, 9];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4, 6];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6] 
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(batch) {
  let oddNumbers = batch[1] + batch[3] + batch[5] + batch[7] + batch[9] + batch[11] + batch[13] + batch[15]
  //console.log(oddNumbers)
  let j = 0;
  let result = []
  do {
    result.push(j)
    j =  j + 2;
  } while (j % 2 === 0 && j < 15) ;
  //console.log(result)
  let even = []
result.forEach(function(element) {
  even.push(batch[(element)])
})
//console.log(even)
for (a=0; a<even.length; a++) {
  even[a] = even[a] * 2
  if (even[a] > 9) {
    even[a] = even[a] - 9
  }
}
//console.log(even)

const evenNumbers = even.reduce((partialSum, a) => partialSum + a, 0);
//console.log(evenNumbers)

if ((oddNumbers + evenNumbers) % 10 === 0) {
  return 'True'
} else {
  return 'False'
}
}

function findInvalidCards(array) {
  let check = validateCred(batch)
  if (check = 'False') {
    return `This ${array} is an invalid array`
  } else {
    return `This array is valid`
  }
}
function idInvalidCardCompanies(array) {
  if (array[0] === 3) {
    return `This is an american Express card`
  } else if (array[0] === 4) {
    return `This is a Visa card`
  } else if (array[0] === 5) {
    return `This is a Mastercard`
  } else if (array[0] === 6) {
    return `This is a discover card`
  } else {
    return `Company not found`
  }
}
console.log(validateCred(invalid2))
console.log(findInvalidCards(invalid2))
console.log(idInvalidCardCompanies(invalid2))