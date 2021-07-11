import { dataAttributes } from '../data-attributes';

test('empty object returns default data attribute', () => {
  const expectedAttributesObject = {
    'data-component': true,
  };
  const dataAttributesObject = dataAttributes('component', {});
  expect(dataAttributesObject).toEqual(expectedAttributesObject);
});

test('custom attributes object returns the correct object', () => {
  const expectedAttributesObject = {
    'data-component': true,
    'data-component-intent': 'default',
    'data-component-appearance': 'primary',
    'data-component-size': 'large',
  };
  const dataAttributesObject = dataAttributes('component', {
    intent: 'default',
    appearance: 'primary',
    size: 'large',
  });
  expect(dataAttributesObject).toEqual(expectedAttributesObject);
});
