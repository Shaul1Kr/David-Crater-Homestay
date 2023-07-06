import styled from "styled-components";
import { Dispatch, SetStateAction, useState } from "react";
import OrderDialog from "./OrderDialog";

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
  top: 20%;
  padding: 1rem;
`;

const OrderContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

const ImgContainer = styled.div``;

const OrderDetailContainer = styled.div``;

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

const Button = styled.button`
  padding: 0.5rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;

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
  const [subContinue, setSubContinue] = useState(false);
  return (
    <RoomDialogContainer open={dialogState}>
      <RoomDialogWraper>
        {!subContinue ? (
          <>
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
            <ButtonWrapper>
              <Button
                onClick={() => {
                  setDialogState(false);
                }}
              >
                Cancle
              </Button>
              <Button
                onClick={() => {
                  setSubContinue(true);
                }}
              >
                Continue
              </Button>
            </ButtonWrapper>
          </>
        ) : (
          <OrderDialog setSubContinue={setSubContinue} />
        )}
      </RoomDialogWraper>
    </RoomDialogContainer>
  );
};

export default RoomDialog;
