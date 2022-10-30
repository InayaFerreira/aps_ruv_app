import styled from 'styled-components/native';

interface IContainerProps {
  widthPercentage: number;
}

export const Container = styled.Pressable<IContainerProps>`
  padding: 12px 0;
  margin: 4px 0;
  width: ${props => props.widthPercentage}%;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const ContainerContent = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0px 16px 0px 24px;
  width: 87%;
`;

export const ContainerClosed = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 116%;
`;

export const ContainerOpen = styled.View`
  padding: 0 24px;
  margin-top: 12px;
`;

export const shadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};
