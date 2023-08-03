import { ReactElement, cloneElement, isValidElement, useState } from "react";
import { VoteBarWrapper } from "./vote-bar.styles";

interface VoteBarProps {
  children: ReactElement;
  total?: number;
  marked?: number;
  colorForMarked?: string;
  mainColor?: string;
}
const VoteBar = ({ children, total = 5, marked = 0, mainColor='grey', colorForMarked='gold' }: VoteBarProps) => {
  const [selectedElements, setSelectedElements] = useState(0);
  return (
    <VoteBarWrapper>
      {Array.from({ length: total }, (_, index) => {
        const isMarked = marked > 0 && index < marked;
        if (!isValidElement) return null;
        return cloneElement(children, {
          key: index,
          color: isMarked ? colorForMarked : mainColor,
        });
      })}
    </VoteBarWrapper>
  );
};

export default VoteBar;
