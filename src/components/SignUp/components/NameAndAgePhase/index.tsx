import React from 'react';

import {
  Container,
} from './styles';

import FormInput from '@/components/FormInput';
import Phase, { PhaseProps } from '@/components/SignUp/components/Phase';

import { useField } from 'formik';

const NameAndAgePhase: React.FC<PhaseProps> = ({ ...props }) => {
  const [nameField, nameMeta] = useField('name');
  const [ageField, ageMeta, ageHelpers] = useField('age');

  const onAgeChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    ageHelpers.setValue(target.value.replace(/\D/, ''));
  };

  const onAgeFocus = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    target.select();
  };

  return (
    <Phase {...props}>
      <Container>
        <FormInput
          {...nameField}
          label="Name"
          type="text"
          id="sign-up__name"
          placeholder="Enter your name"
          error={nameMeta.touched && nameMeta.error}
        />

        <FormInput
          {...ageField}
          label="Age"
          type="text"
          id="sign-up__age"
          placeholder="Type your age"
          onChange={onAgeChange}
          onFocus={onAgeFocus}
          error={ageMeta.touched && ageMeta.error}
        />
      </Container>
    </Phase>
  );
};

export default NameAndAgePhase;
