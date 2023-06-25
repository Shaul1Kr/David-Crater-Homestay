import styled from "styled-components";
import ExploringWrapper from "./ExploringWrapper";
import Elephent from "../assets/Pictures/Elephent.webp";
import Car from "../assets/Pictures/Car.webp";

const ExploringContainer = styled.div`
  display: flex;
  direction: rtl;
`;

const ExploringDiv = styled.div``;

const ExploringInfo2 = () => {
  return (
    <ExploringContainer>
      <ExploringDiv>
        <ExploringWrapper
          image={Car}
          label="Safaris"
          text="Whether you are looking to take a once in a lifetime safari to Serengeti, climb Mount Kilimanjaro, or visit a Maasai village, we have a range of safari and tour packages to suit you."
        />
      </ExploringDiv>
      <ExploringDiv>
        <ExploringWrapper
          image={Elephent}
          label="Day Trips"
          text="This is the perfect opportunity to see the best places in and around Arusha if you are short on time and budget. Explore wild nature, waterfalls, hotsprings or a Maasai village starting from just 50 USD!

          "
        />
      </ExploringDiv>
    </ExploringContainer>
  );
};

export default ExploringInfo2;
