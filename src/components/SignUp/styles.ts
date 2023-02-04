import styled from 'styled-components';

import Button from '@/components/Button';

export const Container = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  min-width: 260px;
  width: 100%;
  position: relative;
  overflow: hidden;
  perspective: 800px;
  padding: 0px ${({ theme }) => theme.spacing.base}px;

  @media (max-width: 500px) {
    grid-column: 1 / 2;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  color: #FFFFFF;
  margin: 0px 0px ${({ theme }) => theme.spacing.lg}px 0px;
  font-weight: 300;
`;

export const PhasesContainer = styled.div`
  position: relative;
  height: 300px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  min-height: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => theme.spacing.mdl}px;
`;

export const LeftButton = styled(Button)`
  grid-column: 1 / 2;
`;

export const RightButton = styled(Button)`
  grid-column: 2 / 3;
`;