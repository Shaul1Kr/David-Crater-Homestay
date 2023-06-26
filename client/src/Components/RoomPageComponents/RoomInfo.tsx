import styled from "styled-components";

const RoomWrapper = styled.div`
  display: flex;
  background-color: yellow;
  place-content: center;
  -webkit-box-pack: center;
  align-items: center;
  gap: 20rem;
  padding: 2rem 0;
  p {
    margin: 0;
  }
`;

const RoomInfoWrapper = styled.div``;

const PriceWrapper = styled.div``;

const RoomFacilitiesWrapper = styled.div`
  font-size: 1.063rem;
`;

const BookNowButton = styled.button`
  padding: 1rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
`;

const RoomTitle = styled.h1`
  font-size: 2.125rem;
`;

const RoomNumBed = styled.p``;

const RoomInfoParagraph = styled.p``;

const Price = styled.p`
  font-size: 2.188rem;
`;

const PerNight = styled.p`
  font-size: 1.125rem;
`;

const RoomInfo = () => {
  return (
    <RoomWrapper>
      <RoomInfoWrapper>
        <RoomTitle>Single Room - Lake Manyara</RoomTitle>
        <RoomFacilitiesWrapper>
          <RoomNumBed>Single Bed,</RoomNumBed>
          <RoomInfoParagraph>Private Bathroom</RoomInfoParagraph>
        </RoomFacilitiesWrapper>
      </RoomInfoWrapper>
      <PriceWrapper>
        <Price>$30</Price>
        <PerNight>per night</PerNight>
        <BookNowButton>BOOK NOW</BookNowButton>
      </PriceWrapper>
    </RoomWrapper>
  );
};

export default RoomInfo;
