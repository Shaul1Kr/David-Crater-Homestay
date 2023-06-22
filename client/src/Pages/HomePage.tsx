import Book from "../Components/Book";
import ChangingImg from "../Components/ChangingImg";
import Header from "../Components/Header";
import styled from "styled-components";
import Rooms from "../Components/Rooms";
import BookARooms from "../Components/BookARoom";
import ExploringInfo from "../Components/ExploringInfo";
import Location from "../Components/Location";

const Page = styled.div`
  width: 100%;
`;

const HomePage = () => {
  return (
    <Page>
      <Header />
      <ChangingImg />
      <Book />
      <Rooms />
      <BookARooms />
      <ExploringInfo />
      <Location />
    </Page>
  );
};

export default HomePage;
