import styled from "styled-components";
import { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import RoomDialog from "./RoomDialog";

const Container = styled.div`
  display: flex;
  justify-self: center;
  padding: 2rem 0;
  margin-top: 1rem;
  border-top: 1px solid #dadcdc;
  border-bottom: 1px solid #dadcdc;
`;

const DetailWrapper = styled.div`
  display: grid;
  margin-left: 1rem;
`;

const PriceWrapper = styled.div`
  display: grid;
  padding-left: 10rem;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const PriceContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const RoomImg = styled.img``;

const Title = styled.h3``;

const SubTitle = styled.p``;

const Price = styled.h1``;

const From = styled.p``;

const Button = styled.button`
  padding: 1rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;

interface RoomWrapperProps {
  image: string;
  title: string;
  subTitle: string;
  price: string;
}

const RoomWrapper = ({ image, title, subTitle, price }: RoomWrapperProps) => {
  const [dialogState, setDialogState] = useState(false);

  return (
    <Container>
      <RoomDialog dialogState={dialogState} />
      <RoomImg src={image} />
      <DetailWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <IconsWrapper>
          <FaWifi />
          <FaShower />
          <FaRegCheckCircle />
        </IconsWrapper>
      </DetailWrapper>
      <PriceWrapper>
        <PriceContainer>
          <From>From</From>
          <Price>{price}</Price>
        </PriceContainer>
        <Button
          onClick={() => {
            setDialogState((current) => !current);
          }}
        >
          More Info
        </Button>
      </PriceWrapper>
    </Container>
  );
};

export default RoomWrapper;
