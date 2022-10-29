import { TextProps } from 'react-native';
import React from 'react';

import { COLORS } from '@styles/colors';

import { StyledText } from './styles';

export interface ICustomTextProps extends TextProps {
  /** Define o nome da família da fonte */
  family?: string;
  /** Tamanho padrão para título h1 */
  h1?: boolean;
  /** Tamanho padrão para título h2 */
  h2?: boolean;
  /** Tamanho padrão para título h3 */
  h3?: boolean;
  /** Tamanho padrão para parágrafo */
  p?: boolean;
  /** Tamanho fixo do texto */
  size?: number;
  /** Espaçamento entre os caracteres */
  letterSpacing?: number;
  /** Altura do espaçamento entre as linhas */
  lineHeight?: number;
  /** Cor do texto */
  color?: (string & {}) | keyof typeof COLORS;
  /** Define negrito na fonte */
  bold?: boolean;
  /** Alinha texto à esquerda */
  left?: boolean;
  /** Alinha texto à direita */
  right?: boolean;
  /** Alinha texto ao centro */
  center?: boolean;
  /** Define transparência do texto */
  opacity?: number;
  children?: React.ReactNode;
}

const CustomText: React.FC<ICustomTextProps> = ({
  family = 'Inter',
  h1,
  h2,
  h3,
  p,
  size = 12,
  letterSpacing,
  color,
  bold,
  left,
  right,
  center,
  opacity,
  children,
  ...rest
}) => {
  return (
    <StyledText
      family={family}
      h1={h1}
      h2={h2}
      h3={h3}
      p={p}
      size={size}
      letterSpacing={letterSpacing}
      color={color}
      bold={bold}
      left={left}
      right={right}
      center={center}
      opacity={opacity}
      {...rest}>
      {children}
    </StyledText>
  );
};

export default CustomText;
