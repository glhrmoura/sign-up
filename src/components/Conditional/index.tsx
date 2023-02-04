import React from 'react';

import If from './components/If';
import ElseIf from './components/ElseIf';
import Else from './components/Else';

export * from './components';

interface ConditionalProps {
  children?: React.ReactNode;
}

const Conditional: React.FC<ConditionalProps> = ({ children }) => {
  let targetChild: React.ReactNode = null;

  React.Children.forEach(children, (child: any) => {
    if (targetChild) return;

    const { type, props } = child;

    if (props.cond && type.displayName === If.displayName) {
      targetChild = child;
    } else if (type.displayName === ElseIf.displayName && props.cond) {
      targetChild = child;
    } else if (type.displayName === Else.displayName) {
      targetChild = child;
    }
  });

  return targetChild;
};

export default Conditional;
