import Book from "../Components/Book";
import ChangingImg from "../Components/ChangingImg";
import Header from "../Components/Header";
import styled from "styled-components";

const Page = styled.div`
  background-color: blue;
  width: 100%;
`;

const HomePage = () => {
  return (
    <Page>
      <Header />
      <ChangingImg />
      <Book />
    </Page>
  );
};

export default HomePage;
