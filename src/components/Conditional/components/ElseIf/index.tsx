import React from 'react';

interface ElseIfProps {
  cond?: boolean;
  children?: React.ReactNode;
}

const ElseIf: React.FC<ElseIfProps> = ({ children, cond }) => cond ? <>{children}</> : null;

ElseIf.displayName = 'ElseIf';

export default ElseIf;
