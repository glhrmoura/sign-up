import React from 'react';

interface ElseProps {
  children?: React.ReactNode;
}

const Else: React.FC<ElseProps> = ({ children }) => <>{children}</>;

Else.displayName = 'Else';

export default Else;
