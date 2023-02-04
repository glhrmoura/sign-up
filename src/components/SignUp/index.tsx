import React, { useState } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Title,
  Container,
  LeftButton,
  RightButton,
  PhasesContainer,
  ButtonContainer,
} from './styles';

import { User } from '@/types/user';

import Conditional, { If, ElseIf } from '@/components/Conditional';
import CompletedPhase from '@/components/SignUp/components/CompletedPhase';
import NameAndAgePhase from '@/components/SignUp/components/NameAndAgePhase';
import EmailAndNewsletterPhase from '@/components/SignUp/components/EmailAndNewsletterPhase';



const signupSchema = Yup.object().shape({
  name: Yup.string()
  .required('Required field'),

  age: Yup.number()
  .required('Required field')
  .min(18, 'To register you must be of legal age'),

  email: Yup.string()
    .required('Required field')
    .email('Email must be a valid email'),

  newsletter: Yup.string()
    .required('Choose one of the options')
 });

const phases = [
  {
    fields: ['name', 'age'],
    component: NameAndAgePhase,
  },
  {
    fields: ['email', 'newsletter'],
    component: EmailAndNewsletterPhase,
  },
  {
    component: CompletedPhase,
  },
];

const initialFormValues = ({
  name: '',
  age: 0,
  email: '',
  newsletter: '',
} as unknown) as User;

const SignUp: React.FC = () => {
  const [phase, setPhase] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const isNotFirstPhase = !!phase;
  const isNotLastPhase = phase !== (phases.length - 1);
  const isBeforeLastPhase = phase === (phases.length - 2)

  const hasErrors = (errors: any) => {
    const { fields } = phases[phase];
  
    return Object
      .keys(errors)
      .some((errorKey) => fields?.includes(errorKey));
  };

  const backPhase = () => setPhase(phase - 1);

  const nextPhase = () => setPhase(phase + 1);

  const onResetForm = (resetFunc: () => void): () => void => () => {
    resetFunc();
    setPhase(0);
  };

  const createUser = (data: User) => new Promise((res) => setTimeout(res, 3000, data));

  const onSubmitForm = async (data: User) => {
    try {
      setLoading(true);

      await createUser(data);
  
      nextPhase();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Sign Up</Title>

      <Formik
        validationSchema={signupSchema}
        initialValues={initialFormValues}
        onSubmit={onSubmitForm}
      >
        {({ errors, dirty, submitForm, resetForm }) => (
          <>
            <PhasesContainer>
              {phases.map(({ component: Phase }, index) => (
                <Phase
                  key={index}
                  visible={phase >= index}
                  current={phase === index}
                  handlerResetForm={onResetForm(resetForm)}
                />
              ))}
            </PhasesContainer>

            <ButtonContainer>
              <Conditional>
                <If cond={isNotFirstPhase && isNotLastPhase}>
                  <LeftButton
                    title="Back"
                    variant="ghost"
                    onClick={backPhase}
                    disabled={loading}
                  />
                </If>
              </Conditional>
              
              <Conditional>
                <If cond={isBeforeLastPhase}>
                  <RightButton
                    title="Create account"
                    variant="ghost"
                    onClick={submitForm}
                    loading={loading}
                    disabled={!dirty || hasErrors(errors) || loading}
                  />
                </If>

                <ElseIf cond={isNotLastPhase}>
                  <RightButton
                    title="Next"
                    variant="ghost"
                    onClick={nextPhase}
                    disabled={!dirty || hasErrors(errors) || loading}
                  />
                </ElseIf>
              </Conditional>
            </ButtonContainer>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
