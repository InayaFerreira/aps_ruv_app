import React from 'react';

import { Container } from './styles';

export interface ISpacerProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const Spacer: React.FC<ISpacerProps> = ({ top, right, bottom, left }) => {
  return <Container top={top} right={right} bottom={bottom} left={left} />;
};

export default Spacer;
