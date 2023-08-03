import styled from "styled-components";
interface CoverProps {
  image: string;
}

export const BookCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 8em;
  max-height: fit-content;
`;

export const Cover = styled.div<CoverProps>`
  border: 0.2em solid brown;
  border-radius: 0.3em;
  background-color: burlywood;
  background-image: url(${(props) => props.image});
  background-size: cover;
  min-width: 100%;
  min-height: 12em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
  transition: ease-in 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const BookShortInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.1em;
  font-weight: 700;
`;
