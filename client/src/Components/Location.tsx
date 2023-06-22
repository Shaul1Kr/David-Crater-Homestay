import styled from "styled-components";
import LocationImg from "../assets/Pictures/Location.webp";

const RoomContainer = styled.div`
  display: flex;
`;

const RoomImgWrapper = styled.div`
  padding: 3rem 8rem;
  gap: 1rem;
  display: grid;
  justify-items: center;
`;

const Text = styled.h3``;

const RoomBed = styled.img`
  height: 80%;
`;

const RoomsButton = styled.button`
  padding: 1rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;

const Location = () => {
  return (
    <RoomContainer>
      <RoomImgWrapper>
        <h1>LOCATION</h1>
        <Text>
          We are conveniently located with easy access to public and private
          transport, and close to the centre of town. We can help you arrange
          transport to your destination. And we offer a pick-up service to and
          from Kilimanjaro and Arusha airports.
        </Text>
        <RoomsButton>Book Now</RoomsButton>
      </RoomImgWrapper>
      <RoomBed src={LocationImg} />
    </RoomContainer>
  );
};

export default Location;
