import { Container, Filling } from "./rating-stripe.styles";

interface RatingStripeProps {
  percents: number;
  width?: string;
}
const RatingStripe = ({ percents = 0, width }: RatingStripeProps) => {
  return (
    <Container width={width}>
      <Filling percents={percents} />
    </Container>
  );
};

export default RatingStripe;
