import styled from "styled-components";
import Leafs from "../../assets/Pictures/Leafs.webp";
import Bed from "../../assets/Pictures/Bed1.webp";

const RoomContainer = styled.div`
  display: flex;
`;

const RoomImgWrapper = styled.div`
  position: relative;
`;

const RoomImg = styled.img``;

const RoomBed = styled.img`
  height: 80%;
`;

const RoomsButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  color: white;
`;

const Rooms = () => {
  return (
    <RoomContainer>
      <RoomImgWrapper>
        <RoomImg src={Leafs}></RoomImg>
        <RoomsButton>Private Rooms</RoomsButton>
      </RoomImgWrapper>
      <RoomBed src={Bed} />
    </RoomContainer>
  );
};

export default Rooms;
