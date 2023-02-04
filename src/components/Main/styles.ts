import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr minmax(auto, 300px) 1fr;
  background-color: ${({ theme }) => theme.colors.green.base};

  @media ${({ theme }) => theme.queries.mobile} {
    grid-template-columns: 1fr;
  }
`;