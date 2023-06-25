import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;

const CheckContainer = styled.div``;

const ResedentsContainer = styled.div`
  width: 6%;
`;

const NumberInput = styled.input`
  font-size: 1em;
  padding: 0.33rem;
  width: -webkit-fill-available;
`;

const Search = styled.button`
  padding: 0.5rem 4rem;
  height: fit-content;
  margin-top: 1.5rem;
  background-color: cornflowerblue;
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
`;

const Label = styled.p`
  margin: 0;
`;

const DatesChacker = () => {
  const [CheckInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [CheckOutDate, setCheckOutDate] = useState<Date | null>(new Date());
  const [Adults, SetAdults] = useState<number | null>(1);
  const [Kids, SetKids] = useState<number | null>(0);

  const updateAdultsNum = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    SetAdults(value);
  };

  const updateKidsNum = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    SetKids(value);
  };

  return (
    <SectionContainer>
      <CheckContainer>
        <Label>Check in</Label>
        <DatePicker
          showIcon
          dateFormat="dd/MM/yy"
          selected={CheckInDate}
          onChange={(date) => setCheckInDate(date)}
        />
      </CheckContainer>
      <CheckContainer>
        <Label>Check in</Label>
        <DatePicker
          showIcon
          dateFormat="dd/MM/yy"
          selected={CheckOutDate}
          onChange={(date) => setCheckOutDate(date)}
        />
      </CheckContainer>
      <ResedentsContainer>
        <Label>Adult</Label>
        <NumberInput
          type="number"
          value={Adults ?? ""}
          onChange={updateAdultsNum}
          min={1}
        />
      </ResedentsContainer>
      <ResedentsContainer>
        <Label>Kids</Label>
        <NumberInput
          type="number"
          value={Kids ?? ""}
          onChange={updateKidsNum}
          min={0}
        />
      </ResedentsContainer>
      <Search>Search</Search>
    </SectionContainer>
  );
};

export default DatesChacker;
