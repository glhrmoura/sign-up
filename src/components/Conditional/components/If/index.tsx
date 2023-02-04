import React from 'react';

interface IfProps {
  cond?: boolean;
  children?: React.ReactNode;
}

const If: React.FC<IfProps> = ({ children, cond }) => cond ? <>{children}</> : null;

If.displayName = 'If';

export default If;
