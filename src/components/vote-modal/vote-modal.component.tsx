import FeatherSvg from "../../svg-components/feather";
import VoteBar from "../vote-bar/vote-bar.component";
import VoteDetailedInfo from "../vote-detailed-info/vote-detailed-info.component";
import {
  AverageRating,
  DarkBlurBG,
  Triangle,
  VoteBox,
} from "./vote-modal.styles";

interface BookVoteModalProps {
  toggleModal: () => void;
  bookRating: {
    averageRating: number;
  };
}
const BookVoteModal = ({ toggleModal, bookRating }: BookVoteModalProps) => {
  const { averageRating } = bookRating;
  return (
    <>
      <VoteBox>
        <AverageRating>{averageRating}</AverageRating>
        <VoteDetailedInfo
          statistic={{ 1: 34, 2: 32, 3: 23, 4: 89, 5: 109 }}
          mainColor="brown"
        >
          <FeatherSvg size=".65em"/>
        </VoteDetailedInfo>
        <div>vote</div>
        <VoteBar total={5} marked={2} mainColor="brown">
          <FeatherSvg isAnimated={true}/>
        </VoteBar>
        <Triangle />
      </VoteBox>
      <DarkBlurBG onClick={toggleModal} />
    </>
  );
};

export default BookVoteModal;
