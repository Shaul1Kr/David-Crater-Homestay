import Book from "../Components/Book";
import ChangingImg from "../Components/ChangingImg";
import Header from "../Components/Header";
import styled from "styled-components";
import Rooms from "../Components/Rooms";
import BookARooms from "../Components/BookARoom";
import ExploringInfo from "../Components/ExploringInfo";
import Location from "../Components/Location";
import ExploringInfo2 from "../Components/ExploringInfo2";

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
      <ExploringInfo2 />
      <Location />
    </Page>
  );
};

export default HomePage;
