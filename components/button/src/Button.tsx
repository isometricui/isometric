import * as React from 'react';
import { dataAttributes } from '@isometric/component-utils';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  intent?: 'default' | 'primary' | 'approval' | 'warning' | 'destructive';
  appearance?: 'default' | 'minimal' | 'outline';
  size?: 'default' | 'small' | 'large' | 'xlarge';
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const variantDataAttributes = dataAttributes('button', {
    intent: props.intent || 'default',
    appearance: props.appearance || 'default',
    size: props.size || 'default',
  });

  const markup = (
    <button type="button" disabled={props.disabled} {...variantDataAttributes}>
      {props.label}
    </button>
  );

  return markup;
}

export default Button;
