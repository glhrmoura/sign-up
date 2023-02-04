import React, { ButtonHTMLAttributes } from 'react';

import {
  ButtonElement,
  LoaderContainer,
} from './styles';

import LoadIcon from '@/components/LoadIcon';
import Conditional, { If, Else } from '@/components/Conditional';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  variant?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  children,
  loading,
  block = false,
  ...props
}) => {
  return (
    <ButtonElement {...props} block={block} variant={variant}>
      <Conditional>
        <If cond={loading}>
          <LoaderContainer>
            <LoadIcon />
          </LoaderContainer>
        </If>

        <Else>
          {children || title}
        </Else>
      </Conditional>
    </ButtonElement>
  );
};

export default Button;
