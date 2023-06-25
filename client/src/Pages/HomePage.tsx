import Book from "../Components/HomePageComponents/Book";
import ChangingImg from "../Components/HomePageComponents/ChangingImg";
import styled from "styled-components";
import Rooms from "../Components/HomePageComponents/Rooms";
import BookARooms from "../Components/HomePageComponents/BookARoom";
import ExploringInfo from "../Components/HomePageComponents/ExploringInfo";
import Location from "../Components/HomePageComponents/Location";
import ExploringInfo2 from "../Components/HomePageComponents/ExploringInfo2";

const Page = styled.div`
  width: 100%;
`;

const HomePage = () => {
  return (
    <Page>
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
