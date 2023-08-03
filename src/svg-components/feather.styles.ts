import styled from "styled-components";

export const AnimatedSvg = styled.svg`
  transition: fill ease 0.7s;
  transition: transform ease 0.2;

  &:hover {
    transform: scale(1.3);
    fill: gold;
  }
`;