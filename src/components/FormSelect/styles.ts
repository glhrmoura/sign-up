import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SelectElement = styled.select<{ error: boolean }>`
  padding: 4px;
  border: none;
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing.mdl}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ error }) => (error
    ? '0px 0px 0px 1.5px red;'
    : '0px 0px 0px 1px rgba(0, 0, 0, 0.2);'
  )};
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 10px;
  position: absolute;
  bottom: -18px;
`;