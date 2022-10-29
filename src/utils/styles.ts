import { StyleProp, ViewStyle } from 'react-native';

export function getOpacityByPress(props: {
  pressed: boolean;
}): StyleProp<ViewStyle> {
  return { opacity: props.pressed ? 0.7 : 1.0 };
}
