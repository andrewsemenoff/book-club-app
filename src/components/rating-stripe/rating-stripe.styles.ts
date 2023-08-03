import styled from "styled-components";
interface FillingProps {
  percents: number;
}
interface ContainerProps{
    width?: string
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  min-height: .6em;
  width: ${({width})=> width??'30%'};
  border-radius: 0.2em;
  background-color: gray;
`;
export const Filling = styled.div<FillingProps>`
  background-color: brown;
  border-radius: 0.2em;
  width: 100%;
  width: ${({ percents }) => percents + "%"};
`;
