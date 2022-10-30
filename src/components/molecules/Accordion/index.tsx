import React, { useState } from 'react';

import { getOpacityByPress } from '@utils/styles';

import {
  Container,
  ContainerClosed,
  ContainerContent,
  ContainerOpen,
  shadow,
} from './styles';

interface IAccordionProps {
  content: React.ReactNode;
  contentHidden?: React.ReactNode;
  widthPercentage?: number;
  children?: React.ReactNode;
}

const Accordion: React.FC<IAccordionProps> = ({
  content,
  contentHidden,
  widthPercentage = 100,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container
      widthPercentage={widthPercentage}
      style={({ pressed }) => [getOpacityByPress({ pressed: pressed }), shadow]}
      onPress={contentHidden !== undefined ? () => setIsOpen(!isOpen) : null}>
      <ContainerClosed>
        <ContainerContent>{content}</ContainerContent>
      </ContainerClosed>

      {isOpen && <ContainerOpen>{contentHidden}</ContainerOpen>}
    </Container>
  );
};

export default Accordion;
