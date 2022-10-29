import styled from 'styled-components/native';
import { Text } from 'react-native';

import { COLORS } from '@styles/colors';

import { ICustomTextProps } from '.';

const handleTextAlign = (props: ICustomTextProps) => {
  if (props.right) {
    return 'right';
  } else if (props.center) {
    return 'center';
  } else {
    return 'left';
  }
};

const handleTextColor = (
  color: (string & {}) | keyof typeof COLORS | undefined,
) => {
  let definedColor = color || '#000000';

  for (let i in COLORS) {
    if (i === color) {
      definedColor = COLORS[i];
    }
  }

  return definedColor;
};

export const StyledText = styled(Text)<ICustomTextProps>`
  opacity: ${props => props.opacity || 1};
  font-family: ${props => props.family};
  font-weight: ${props => (props.bold ? '800' : '400')};
  font-size: ${props => props.size}px;
  text-align: ${props => handleTextAlign(props)};
  letter-spacing: ${props => props.letterSpacing || 0}px;
  color: ${props => handleTextColor(props.color)};
`;
