import styled from "styled-components";
import TitleSection from "../Components/TitleSection";
import InformationWrapper from "../Components/ToursAndSafarisComponents/InformationWrapper";

const Page = styled.div`
  width: 100%;
  background-color: aliceblue;
  display: grid;
  justify-items: center;
`;

const ToursAndSafaris = () => {
  return (
    <Page>
      <TitleSection />
      <InformationWrapper />
    </Page>
  );
};

export default ToursAndSafaris;
