import React from 'react';

import { useField } from 'formik';

import {
  Container,
} from './styles';

import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';
import Phase, { PhaseProps } from '@/components/SignUp/components/Phase';

const EmailAndNewsletterPhase: React.FC<PhaseProps> = ({ ...props }) => {
  const [emailField, emailMeta] = useField('email');
  const [newsletterField, newsletterMeta] = useField('newsletter');

  return (
    <Phase {...props}>
      <Container>
        <FormInput
          {...emailField}
          type="email"
          label="Email"
          id="sign-up__email"
          placeholder="Enter your email"
          error={emailMeta.touched && emailMeta.error}
        />

        <FormSelect
          {...newsletterField}
          label="Newsletter"
          error={newsletterMeta.touched && newsletterMeta.error}
          options={[
            { value: '', label: 'Choose one of the options' },
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
          ]}
        />
      </Container>
    </Phase>
  );
};

export default EmailAndNewsletterPhase;
