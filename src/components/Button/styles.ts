import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const ButtonElement = styled.button<{ variant: string, block: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  min-width: 60px;
  min-height: 30px;
  text-transform: uppercase;
  border-radius: 1px;
  font-weight: 400;
  letter-spacing: .5px;
  cursor: pointer;

  &:active:not(:disabled) {
    top: 5px;
    box-shadow: 0px 0px 0px 0px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray.medium};
    background-color: ${({ theme }) => theme.colors.gray.light};
    opacity: 0.8;
    cursor: default;
    box-shadow: 
      0px 2px 0px 0px ${({ theme }) => theme.colors.gray.base},
      0px 2px 0px 0px ${({ theme }) => theme.colors.gray.base},
      0px 3px 0px 0px ${({ theme }) => theme.colors.gray.base},
      0px 4px 0px 0px ${({ theme }) => theme.colors.gray.base},
      0px 5px 0px 0px ${({ theme }) => theme.colors.gray.base};
  }

  ${({ block }) => block && (
    css`
      width: 100%;
    `
  )}

  ${({ variant }) => (variant === 'primary') && (
    css`
      background-color: ${({ theme }) => theme.colors.green.base};
      color: ${({ theme }) => theme.colors.white};
      padding: ${({ theme }) => theme.spacing.mdl}px;
      font-size: 12px;
      box-shadow: 
        0px 2px 0px 0px ${({ theme }) => theme.colors.green.dark},
        0px 2px 0px 0px ${({ theme }) => theme.colors.green.dark},
        0px 3px 0px 0px ${({ theme }) => theme.colors.green.dark},
        0px 4px 0px 0px ${({ theme }) => theme.colors.green.dark},
        0px 5px 0px 0px ${({ theme }) => theme.colors.green.dark};
    `
  )}

  ${({ variant }) => (variant === 'ghost') && (
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      padding: ${({ theme }) => theme.spacing.md}px;
      font-size: 10px;
      box-shadow: 
        0px 2px 0px 0px ${({ theme }) => theme.colors.gray.light},
        0px 2px 0px 0px ${({ theme }) => theme.colors.gray.light},
        0px 3px 0px 0px ${({ theme }) => theme.colors.gray.light},
        0px 4px 0px 0px ${({ theme }) => theme.colors.gray.light},
        0px 5px 0px 0px ${({ theme }) => theme.colors.gray.light};
    `
  )}
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  animation: ${rotate} 1.6s linear infinite;
  transform-origin: center;
`;