import React, { ButtonHTMLAttributes } from 'react';

import { Condition, If, Else } from '@glhrmoura/react-conditional';

import {
  ButtonElement,
  LoaderContainer,
} from './styles';

import LoadIcon from '@/components/LoadIcon';

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
      <Condition>
        <If condition={loading}>
          <LoaderContainer>
            <LoadIcon />
          </LoaderContainer>
        </If>
        <Else>
          {children || title}
        </Else>
      </Condition>
    </ButtonElement>
  );
};

export default Button;
