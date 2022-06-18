import { expect, test } from 'vitest';
import { bananaCount, filteredFruits, fourFruit, fruits, uppercaseFruits } from '../index';

test('filteredFruits does not contain bananas', () => {
	expect(
		filteredFruits?.includes('banana') ?
			'filteredFruits contains banana'
		:
			'filteredFruits doesn\'t contain banana'
	).toBe('filteredFruits doesn\'t contain banana');
});

test('uppercaseFruits should be all uppercase', () => {
	uppercaseFruits.forEach(fruit => 
		expect(fruit).toBe(fruit.toUpperCase())
	);
});

test('bananaCount properly reflects the number of bananas', () => {
	expect(bananaCount).toBe(3);
});

test('fourFruit gives the first fruit with a length of 4', () => {
	expect(fourFruit).toBe('pear');
});

test('tenFruit gives the index of the first fruit with a length of 10', () => {
	expect(tenFruit?.length).toBe(10);
});

test('fruits should be sorted alphabetically', () => {
	const sortedFruits = [...fruits].sort();
	sortedFruits.forEach((fruit, idx) => {
		expect(fruits[idx]).toBe(fruit);
	});
});