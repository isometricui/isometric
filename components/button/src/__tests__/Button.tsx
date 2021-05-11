import * as React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders', () => {
  render(<Button label="Button" />);
});
