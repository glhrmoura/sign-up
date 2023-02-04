import React, { InputHTMLAttributes } from 'react';

import {
  InputContainer,
  InputElement,
  ErrorMessage,
} from './styles';

import FormLabel from '@/components/FormLabel';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, error, value, ...props }) => {
  return (
    <InputContainer>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>

      <InputElement
        {...props}
        id={id}
        value={value || ''}
        error={Boolean(error)}
      />

      <ErrorMessage>
        {error}
      </ErrorMessage>
    </InputContainer>
  );
};

export default FormInput;
