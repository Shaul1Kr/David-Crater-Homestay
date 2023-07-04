import styled from "styled-components";
import DatesChacker from "../HomePageComponents/DatesChacker";
import RoomWrapper from "./RoomWrapper";
import RoomsInfo from "../../data/RoomData";

const Wrapper = styled.div`
  display: grid;
  background-color: white;
  margin: 3rem 0;
  padding: 2rem;
`;
const Title = styled.h1``;

const BookWrapper = () => {
  return (
    <Wrapper>
      <Title>Our Rooms</Title>
      <DatesChacker />
      {RoomsInfo.map((roomInfo) => (
        <RoomWrapper
          image={roomInfo.image}
          title={roomInfo.title}
          subTitle={roomInfo.subTitle}
          price={roomInfo.price}
        />
      ))}
    </Wrapper>
  );
};

export default BookWrapper;
