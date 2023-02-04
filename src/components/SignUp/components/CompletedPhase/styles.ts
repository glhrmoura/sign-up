import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.base}px;
`;

export const Title = styled.div`
  position: relative;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.base}px;
  font-size: 18px;
`;

export const Description = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.sml}px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray.medium};
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.base}px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;
