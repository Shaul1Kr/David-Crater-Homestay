import styled from "styled-components";
import DatesChacker from "../HomePageComponents/DatesChacker";

const Wrapper = styled.div`
  display: grid;
  background-color: white;
  width: 50%;
  margin: 3rem 0;
`;
const Title = styled.h1``;

const BookWrapper = () => {
  return (
    <Wrapper>
      <Title>Our Rooms</Title>
      <DatesChacker />
    </Wrapper>
  );
};

export default BookWrapper;
