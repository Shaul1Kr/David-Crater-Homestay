import styled from "styled-components";
import Bed from "../assets/Pictures/Bed2.webp";

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

const BookARooms = () => {
  return (
    <RoomContainer>
      <RoomBed src={Bed} />
      <RoomImgWrapper>
        <Text>
          From shared dorms to private rooms and family accommodation we have
          the right room for you. We offer a wide range of adaptable room sizes
          to accommodate any arrangement you may need. You can choose from a
          simple single room, a spacious double, or a large family bedroom.
        </Text>
        <RoomsButton>Book Now</RoomsButton>
      </RoomImgWrapper>
    </RoomContainer>
  );
};

export default BookARooms;
