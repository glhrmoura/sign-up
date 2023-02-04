import React from 'react';

import {
  Container,
} from './styles';

export interface PhaseProps {
  visible: boolean;
  current: boolean;
  children?: React.ReactNode;
}

const Phase: React.FC<PhaseProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default Phase;
