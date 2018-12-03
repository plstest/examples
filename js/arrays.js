const myArray = [
  "Billy",
  "Nancy",
  "Trevor",
  "Vanessa",
  "Dog",
  "Cat",
  "",
  ,
  ,
  ,
  4,
  899,
  "Nancy",
  "Vanessa"
];

// Numbers
const elNumbers = document.querySelector(".numbers");
const numbers = myArray.filter(element => {
	return typeof element == 'number'
});

elNumbers.textContent += numbers;


// Strings
const elStrings = document.querySelector(".strings");
const strings = myArray.filter(element => {
	return typeof element == 'string' && element != ""
});

elStrings.textContent += strings;


// Remove duplicates
const elDuplicates = document.querySelector(".duplicates");
const removeDuplicates = arr => {
  return Array.from(new Set(arr))
}

elDuplicates.textContent += removeDuplicates(myArray);


// Sum of array
const elSumOf = document.querySelector(".sumOf");
const onlyNumbers = myArray.filter(x => typeof x == 'number');

const renderNumbers = onlyNumbers.reduce((num1, num2) => {
  return num1 + num2;
});

elSumOf.textContent = renderNumbers;