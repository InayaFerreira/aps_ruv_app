import styled from 'styled-components/native';

import { ISpacerProps } from '.';

export const Container = styled.View<ISpacerProps>`
  margin-top: ${props => props.top || 0}px;
  margin-right: ${props => props.right || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
  margin-left: ${props => props.left || 0}px;
`;
