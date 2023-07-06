import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import SelectCountries from "../../data/SelectCountries";

const DetialsContainer = styled.div`
  border-bottom: 1px solid;
`;

const GuestDetail = styled.h2``;

const InputsWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const FirstWrapper = styled.div``;

const SecondWrapper = styled.div``;

const Details = styled.h3``;

const Input = styled.input``;

const TextInput = styled.textarea``;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;

interface OrderDialogProps {
  setSubContinue: Dispatch<SetStateAction<boolean>>;
}

const OrderDialog = ({ setSubContinue }: OrderDialogProps) => {
  return (
    <>
      <DetialsContainer>
        <GuestDetail>Guest Details</GuestDetail>
      </DetialsContainer>
      <InputsWrapper>
        <FirstWrapper>
          <Details>First Name</Details>
          <Input />
          <Details>Email Address</Details>
          <Input />
          <Details>Country</Details>
          <SelectCountries />
        </FirstWrapper>
        <SecondWrapper>
          <Details>Last Name</Details>
          <Input />
          <Details>Phone Number</Details>
          <Input />
          <Details>Special Requests</Details>
          <TextInput />
        </SecondWrapper>
      </InputsWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            setSubContinue(false);
          }}
        >
          Back
        </Button>
        <Button>Submit</Button>
      </ButtonWrapper>
    </>
  );
};

export default OrderDialog;
