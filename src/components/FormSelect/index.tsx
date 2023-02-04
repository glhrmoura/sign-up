import React, { SelectHTMLAttributes } from 'react';

import {
  SelectElement,
  SelectContainer,
  ErrorMessage,
} from './styles';

import FormLabel from '@/components/FormLabel';

interface OptionProps {
  value: string;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string | boolean;
  options: OptionProps[];
};

const FormSelect: React.FC<FormSelectProps> = ({ options, label, id, error, ...props }) => {
  return (
    <SelectContainer>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>

      <SelectElement {...props} error={Boolean(error)}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectElement>

      <ErrorMessage>
        {error}
      </ErrorMessage>
    </SelectContainer>
  );
};

export default FormSelect;
