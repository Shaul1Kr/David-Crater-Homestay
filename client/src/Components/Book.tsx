import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatesChacker from "./DatesChacker";
import TextSection from "./TextSection";

const BookPage = styled.div`
  background-color: rgb(99, 136, 148);
`;

const Book = () => {
  return (
    <BookPage>
      <DatesChacker />
      <TextSection />
    </BookPage>
  );
};

export default Book;
