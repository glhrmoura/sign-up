import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputElement = styled.input<{ error: boolean; }>`
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing.mdl}px;
  border-radius: 4px;
  border: none;
  transition: box-shadow .2s;
  background-color: transparent;
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