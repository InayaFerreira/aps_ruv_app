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
  children?: React.ReactNode;
}

const Accordion: React.FC<IAccordionProps> = ({ content, contentHidden }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container
      style={({ pressed }) => [getOpacityByPress({ pressed: pressed }), shadow]}
      onPress={() => setIsOpen(!isOpen)}>
      <ContainerClosed>
        <ContainerContent>{content}</ContainerContent>
      </ContainerClosed>

      {isOpen && <ContainerOpen>{contentHidden}</ContainerOpen>}
    </Container>
  );
};

export default Accordion;
