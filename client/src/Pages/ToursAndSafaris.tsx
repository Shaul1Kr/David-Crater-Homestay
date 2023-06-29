import styled from "styled-components";
import TitleSection from "../Components/TitleSection";
import Information from "../Components/ToursAndSafarisComponents/Information";

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
      <Information />
    </Page>
  );
};

export default ToursAndSafaris;
