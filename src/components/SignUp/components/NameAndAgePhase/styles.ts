import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.base}px;
  border-radius: 4px;
  row-gap: ${({ theme }) => theme.spacing.xl2}px;
`;
