import styled from "styled-components";
import ExploringWrapper from "./ExploringWrapper";
import Pool from "../../assets/Pictures/Pool.webp";
import Bar from "../../assets/Pictures/Bar.webp";

const ExploringContainer = styled.div`
  display: flex;
`;

const ExploringDiv = styled.div``;

const ExploringInfo = () => {
  return (
    <ExploringContainer>
      <ExploringDiv>
        <ExploringWrapper
          image={Pool}
          label="Swimming Pool"
          text="Start the day fresh with a dip in our outdoor pool, or sink into one of our comfortable sun loungers. Pool towels are available free of charge from the front desk."
        />
      </ExploringDiv>
      <ExploringDiv>
        <ExploringWrapper
          image={Bar}
          label="Sunset Bar"
          text="Enjoy a spectacular sunset on the roof of our building. After that have a drink with friends and dance till night with music from a pro DJ. Everything needed for a great party included!"
        />
      </ExploringDiv>
    </ExploringContainer>
  );
};

export default ExploringInfo;
