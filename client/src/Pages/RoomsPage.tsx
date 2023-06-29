import styled from "styled-components";
import TitleSection from "../Components/TitleSection";
import RoomInfo from "../Components/RoomPageComponents/RoomInfo";
import RoomImg from "../Components/RoomPageComponents/RoomImg";

const Page = styled.div`
  width: 100%;
`;

const RoomsPage = () => {
  return (
    <Page>
      <TitleSection />
      <RoomInfo />
      <RoomImg />
    </Page>
  );
};

export default RoomsPage;
