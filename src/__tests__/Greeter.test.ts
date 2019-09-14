import { Greeter, MyName } from '../index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('My Greeter', () => {
  expect(MyName('Carl')).toBe('Your Name Is: Carl');
});