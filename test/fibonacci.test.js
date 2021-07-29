const getFibonacci = require('../src/handler/index');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('test fibonacci series', () => {   
   test('user input - passing charecter', async () => {
      //expect.assertions(1);
      inquirer.prompt = jest.fn().mockResolvedValue({ range: 'k' });
      await expect(getFibonacci.generateFibonacci()).resolves.toEqual('Value cannot be a string/charecter.');
   });
   test('user input - passing 0', async () => {
      //expect.assertions(1);
      inquirer.prompt = jest.fn().mockResolvedValue({ range: 0 });
      await expect(getFibonacci.generateFibonacci()).resolves.toEqual('Enter value which is greater than 0.');
   });
   test('user input - passing negative value', async () => {
      //expect.assertions(1);
      inquirer.prompt = jest.fn().mockResolvedValue({ range: -1 });
      await expect(getFibonacci.generateFibonacci()).resolves.toEqual('Enter value which is greater than 0.');
   });
   test('user input - passing actual inut - 5', async () => {
      //expect.assertions(1);
      inquirer.prompt = jest.fn().mockResolvedValue({ range: 5 });
      await expect(getFibonacci.generateFibonacci()).resolves.toEqual([0, 1, 1, 2, 3]);
   });
   test('user input - passing actual inut - 10', async () => {
      //expect.assertions(1);
      inquirer.prompt = jest.fn().mockResolvedValue({ range: 10 });
      await expect(getFibonacci.generateFibonacci()).resolves.toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
   });
});