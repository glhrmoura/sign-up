import React from 'react';

import {
  Container,
  IconContainer,
  Title,
  Description,
  ButtonContainer,
} from './styles';

import CheckIcon from '@/components/CheckIcon';
import Button from '@/components/Button';
import Phase, { PhaseProps } from '@/components/SignUp/components/Phase';

interface CompletedPhaseProps extends PhaseProps {
  handlerResetForm: () => void;
}

const CompletedPhase: React.FC<CompletedPhaseProps> = ({ handlerResetForm = () => {}, ...props }) => {
  return (
    <Phase {...props}>
      <Container>
        <IconContainer>
          <CheckIcon />
        </IconContainer>

        <Title>
          Thanks for signin up
        </Title>

        <Description>
          We'll keep you posted on the latest device tips, product updates, news and special offers.
        </Description>

        <ButtonContainer>
          <Button
            block
            title="Create another account"
            onClick={handlerResetForm}
          />
        </ButtonContainer>
      </Container>
    </Phase>
  );
};

export default CompletedPhase;
