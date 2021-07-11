import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Renders with the correct label', () => {
  const buttonLabelText = 'Example Button';
  const { rerender, unmount } = render(<Button label={buttonLabelText} />);
  let button = screen.getByText(buttonLabelText);
  expect(button).toBeInTheDocument();
  unmount();
  expect(button).not.toBeInTheDocument();

  const newButtonLabelText = 'Another Kind of Button';
  rerender(<Button label={newButtonLabelText} />);
  button = screen.getByText(newButtonLabelText);
  expect(button).toBeInTheDocument();
});

test(`Disabled button shouldn't work`, () => {
  const buttonLabeltext = 'Test Label';
  const { debug, rerender, unmount } = render(
    <Button label={buttonLabeltext} disabled={true} />
  );
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
  debug();
  unmount();
  expect(button).not.toBeInTheDocument();

  rerender(<Button label={buttonLabeltext} disabled={false} />);
  const rerenderedButton = screen.getByRole('button');
  expect(rerenderedButton).toBeInTheDocument();
  expect(rerenderedButton).not.toBeDisabled();
});
