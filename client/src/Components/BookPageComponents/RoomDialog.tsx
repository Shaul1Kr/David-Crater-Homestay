import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

const RoomDialogContainer = styled.dialog`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const RoomDialogWraper = styled.div`
  position: absolute;
  background-color: white;
  left: 35%;
  top: 30%;
`;

const OrderContainer = styled.div`
  display: grid;
`;

const ImgContainer = styled.div``;

const OrderDetailContainer = styled.div``;

const TitleContainer = styled.div``;

const RoomTypeContainer = styled.div``;

const DatesContainer = styled.div``;

const NumOfNightsContainer = styled.div``;

const GuestsContainer = styled.div``;

const TotalPriceContainer = styled.div``;

const Title = styled.h1``;

const RoomType = styled.h2``;

const Dates = styled.p``;

const NumOfNights = styled.p``;

const Guests = styled.p``;

const TotalPrice = styled.p``;

const Button = styled.button``;

interface RoomDialogProps {
  dialogState: boolean;
  setDialogState: Dispatch<SetStateAction<boolean>>;
  image: string;
  title: string;
  price: string;
}

const RoomDialog = ({
  dialogState,
  setDialogState,
  image,
  title,
  price,
}: RoomDialogProps) => {
  return (
    <RoomDialogContainer open={dialogState}>
      <RoomDialogWraper>
        <OrderContainer>
          <TitleContainer>
            <Title>Order Summary</Title>
          </TitleContainer>
          <ImgContainer>
            <img src={image} />
          </ImgContainer>
          <OrderDetailContainer>
            <RoomTypeContainer>
              <RoomType>Room Type: {title}</RoomType>
            </RoomTypeContainer>
            <DatesContainer>
              <Dates>Dates: asdsad</Dates>
            </DatesContainer>
            <NumOfNightsContainer>
              <NumOfNights>No. of nights: asdasd</NumOfNights>
            </NumOfNightsContainer>
            <GuestsContainer>
              <Guests>Guests: asdasds</Guests>
            </GuestsContainer>
            <TotalPriceContainer>
              <TotalPrice>Total: {price}</TotalPrice>
            </TotalPriceContainer>
          </OrderDetailContainer>
        </OrderContainer>
        <Button
          onClick={() => {
            setDialogState(false);
          }}
        >
          Cancle
        </Button>
      </RoomDialogWraper>
    </RoomDialogContainer>
  );
};

export default RoomDialog;
