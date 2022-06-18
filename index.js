// DO NOT EDIT THE FRUITS ARRAY
const fruits = [
	'banana',
	'apple',
	'pear',
	'orange',
	'grapefruit',
	'banana',
	'kiwi',
	'mango',
	'banana',
	'papaya'
];
// ^ DO NOT EDIT THE ABOVE ^

// change this to store the filtered fruits as mentioned in README
const filteredFruits = fruits.filter(fruit => fruit !== 'banana');

// change this store all fruits uppercase using .map()
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());

// change this to the output of array.reduce and count the number of bananas in array
const bananaCount = fruits.reduce((bananaTotal, currentFruit) => {
	if (currentFruit === 'banana') return bananaTotal + 1;
	return bananaTotal;
}, 0);

// change this to the store output of find to find the first fruit that has a length of 4
const fourFruit = fruits.find(fruit => fruit.length === 4);

// change this to use findIndex to find the index of the fruit with a length of 10
const tenFruit = fruits.findIndex(fruit => fruit.length === 10);

/*
Sort the list of fruits here
*/ 
fruits.sort();


/*
* ======= DO NOT TOUCH THIS BELOW ========
*/

export {
	fruits,
	filteredFruits,
	uppercaseFruits,
	bananaCount,
	fourFruit,
	tenFruit,
}