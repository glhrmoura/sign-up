import styled from 'styled-components';

export const Container = styled.div<{ visible: boolean; current: boolean; }>`
  display: flex;
  border-radius: 4px;
  background-color: #FFFFFF;
  border: none;
  height: 100%;
  width: 100%;
  position: absolute;
  transition-duration: .5s;
  transition-property: transform, left, top, visibility;
  box-shadow: rgba(0, 0, 0, .1) 0px 3px 6px, rgba(0, 0, 0, .4) 0px 3px 10px;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  left: ${({ visible }) => visible ? '0%' : 'calc(100% + 50px)'};
  top: ${({ visible, current }) => (visible && !current) ? '24px' : '0px'};
  transform: ${({ current, visible }) => (current || !visible) ? 'scale(1)' : 'scale(.9)'};
`;
