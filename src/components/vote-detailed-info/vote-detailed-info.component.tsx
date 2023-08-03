import { ReactElement } from "react";
import RatingStripe from "../rating-stripe/rating-stripe.component";
import VoteBar from "../vote-bar/vote-bar.component";
import {
  CountWrapper,
  HorizontalFlex,
  Subtitle,
  VoteDetailedInfoBox,
  Wrapper,
} from "./vote-detailed-info.styles";
interface VoteDetailedInfoProps {
  children: ReactElement;
  statistic: { [key: number]: number };
  mainColor?: string;
}

function countTotalVotes(statistic: { [key: number]: number }) {
  let res = 0;
  for (let key in statistic) {
    res += statistic[key];
  }
  return res;
}
function countPercentage(totalAmount: number, portion: number) {
  let res = Math.round((portion * 100) / totalAmount);
  return res;
}
const VoteDetailedInfo = ({
  children,
  statistic,
  mainColor = "black",
}: VoteDetailedInfoProps) => {
  const total = countTotalVotes(statistic);
  return (
    <VoteDetailedInfoBox>
      <HorizontalFlex>
        total votes
        <Subtitle>{total}</Subtitle>
      </HorizontalFlex>

      {Object.entries(statistic)
        .reverse()
        .map((item, index) => {
          let percents = countPercentage(total,item[1])
          return(
          <HorizontalFlex key={index}>
            <Wrapper>
              <VoteBar mainColor={mainColor} total={+item[0]}>
                {children}
              </VoteBar>
            </Wrapper>
            <CountWrapper>{item[1]}</CountWrapper>
            <RatingStripe width="40%" percents={percents} />
          </HorizontalFlex>
        )})}
    </VoteDetailedInfoBox>
  );
};

export default VoteDetailedInfo;
