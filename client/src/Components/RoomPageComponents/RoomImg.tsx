import styled from "styled-components";
import PrivateRoom from "../../assets/Pictures/PrivateRoom.jpg";

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrivateRoomImg = styled.img``;

const RoomImg = () => {
  return (
    <ImgWrapper>
      <PrivateRoomImg src={PrivateRoom} />
    </ImgWrapper>
  );
};

export default RoomImg;
