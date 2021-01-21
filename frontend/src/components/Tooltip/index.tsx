import React from 'react';

import { Container } from './styles';

interface TooltilProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltilProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
