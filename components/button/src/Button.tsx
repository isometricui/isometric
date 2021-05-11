import * as React from 'react';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  intent?: 'default' | 'primary' | 'approval' | 'warning' | 'destructive';
  appearance?: 'default' | 'minimal' | 'outline';
  size?: 'default' | 'small' | 'large' | 'xlarge';
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const variants = {
    intent: props.intent && 'default',
    appearance: props.appearance && 'default',
    size: props.size && 'normal',
  };

  const variantAttributes = {
    'data-isometric-button': true,
    'data-isometric-button-intent': variants.intent,
    'data-isometric-button-appearance': variants.appearance,
    'data-isometric-button-size': variants.size,
  };

  const markup = (
    <button type="button" disabled={props.disabled} {...variantAttributes}>
      {props.label}
    </button>
  );

  return markup;
}

export default Button;
