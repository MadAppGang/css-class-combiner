const Combiner = require('../index');

test('the output is a string', () => {
  expect(typeof new Combiner('').toString()).toBe('string');
});

test('the base class defaults to an empty string when is not specified', () => {
  expect(new Combiner().toString()).toEqual('');
});

test('the output equals the passed base class', () => {
  const baseClass = 'baseClass';
  expect(new Combiner(baseClass).toString()).toEqual(baseClass);
});

test('the combiner has "combine" api method', () => {
  expect(new Combiner()).toHaveProperty('combine');
});

test('the combiner "combine" api method is a function', () => {
  expect(typeof new Combiner().combine).toBe('function');
});

describe('combination tests', () => {
  const baseClass = 'baseClass';
  const extraClass = 'extraClass';

  const output = new Combiner(baseClass).combine(extraClass).toString();

  test('additional class gets attached to the base class', () => {
    expect(output).toContain(extraClass);
  });

  test('classes are joined by a space', () => {
    expect(output).toEqual(baseClass + ' ' + extraClass);
  });
});

describe('combination chain tests', () => {
  const baseClass = 'baseClass';
  const hoverClass = 'hoverClass';
  const focusClass = 'focusClass';
  const output = new Combiner(baseClass)
    .combine(hoverClass)
    .combine(focusClass)
    .toString();

  expect(output).toEqual(baseClass + ' ' + hoverClass + ' ' + focusClass);
});

test('combiner has a "combineIf" prop', () => {
  expect(new Combiner()).toHaveProperty('combineIf');
});

test('combiner "combineIf" prop is a function', () => {
  expect(typeof new Combiner().combineIf).toBe('function');
});

test('attaches the extra class only under the condition', () => {
  const baseClass = 'baseClass';
  const extraClass = 'extraClass';
  const output = new Combiner(baseClass).combineIf(true, extraClass);

  expect(output.toString()).toContain(extraClass);
});

test('does not attach the extra class when the condition is false', () => {
  const baseClass = 'baseClass';
  const extraClass = 'extraClass';
  const output = new Combiner(baseClass).combineIf(false, extraClass);

  expect(output.toString()).not.toContain(extraClass);
});

test('allows to chain "combineIf" calls', () => {
  const [a, b, c] = ['a', 'b', 'c'];
  const output = new Combiner(a).combineIf(true, b).combineIf(true, c);

  expect(output.toString()).toEqual(a + ' ' + b + ' ' + c);
});
