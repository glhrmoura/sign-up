import React, { LabelHTMLAttributes } from 'react';

import {
  LabelElement,
} from './styles';

const FormLabel: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => {
  return (
    <LabelElement {...props}>
      {children}
    </LabelElement>
  );
};

export default FormLabel;
