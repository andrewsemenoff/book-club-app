import styled from "styled-components";

export const VoteBox = styled.div`
  width: 10em;
  display: flex;
  left: 1em;
  flex-direction: column;
  align-items: center;
  background-color: lightsalmon;
  position: absolute;
  top: 1em;
  z-index: 20;
  height: fit-content;
  border-radius: 0.4em;
  padding: 0.5em;

  animation: fadeIn 0.5s;
  @keyframes fadeIn {
    0% {
      top: -5em;
      opacity: 0;
    }
    100% {
      top: 1em;
      opacity: 1;
    }
  }
`;
export const Triangle = styled.div`
  position: absolute;
  bottom: -0.5em;
  left: 15%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 1em solid transparent;
  border-top: 0.5em solid lightsalmon; /* Change color to set the desired triangle color */
`;

export const AverageRating = styled.div`
  font-size: 2em;
`;

export const DarkBlurBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  animation: fade 0.5s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
