import styled from "styled-components";
import TitleSection from "../Components/RoomPageComponents/TitleSection";
import RoomInfo from "../Components/RoomPageComponents/RoomInfo";

const Page = styled.div`
  width: 100%;
`;

const RoomsPage = () => {
  return (
    <Page>
      <TitleSection />
      <RoomInfo />
    </Page>
  );
};

export default RoomsPage;
