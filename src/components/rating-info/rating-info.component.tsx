import useModal from "../../custom-hooks/useModal";
import FeatherSvg from "../../svg-components/feather";
import BookVoteModal from "../vote-modal/vote-modal.component";
import { AverageRating, RatingInfoBox, TotalVotes } from "./rating-info.styles";
interface RatingInfoProps {
  averageRating: number;
  totalVotes: number;
}
const RatingInfo = (bookRating: RatingInfoProps) => {
  const {totalVotes, averageRating} = bookRating;
  const [isDisplayed, toggleIsDisplayed] = useModal(false);
  return (
    <>
    <RatingInfoBox onClick={toggleIsDisplayed}>
      <AverageRating>{averageRating}</AverageRating>
      <FeatherSvg color="brown" size="1.2em" />
      <TotalVotes>{totalVotes}</TotalVotes>
    </RatingInfoBox>
      {isDisplayed && <BookVoteModal toggleModal={toggleIsDisplayed} bookRating={bookRating}/>}
    </>
  );
};

export default RatingInfo;
