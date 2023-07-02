import styled from "styled-components";
import BookWrapper from "../Components/BookPageComponents/BookWrapper";

const Page = styled.div`
  width: 100%;
  background-color: blue;
  display: grid;
  justify-items: center;
`;

const Book = () => {
  return (
    <Page>
      <BookWrapper></BookWrapper>
    </Page>
  );
};

export default Book;
