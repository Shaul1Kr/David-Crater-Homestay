import ChangingImg from "../Components/ChangingImg";
import Header from "../Components/Header";
import styled from "styled-components";

const Page = styled.div`
  background-color: blue;
`;

const HomePage = () => {
  return (
    <Page>
      <Header />
      <ChangingImg />
    </Page>
  );
};

export default HomePage;
