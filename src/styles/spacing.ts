export const SPACE_XS = 8;
export const SPACE_SM = 12;
export const SPACE_MD = 16;
export const SPACE_LG = 24;

export function spacing(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
) {
  return `${top}px ${right}px ${bottom}px ${left}px`;
}
