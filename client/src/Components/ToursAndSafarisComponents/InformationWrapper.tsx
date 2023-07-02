import styled from "styled-components";
import Information from "./Information";
import ElephentSafari from "../../assets/Pictures/ElephentSafari.webp";
import CarSafari from "../../assets/Pictures/CarsSafari.webp";
import ZebraSafari from "../../assets/Pictures/ZebraSafari.webp";
import infos from "../../data/InfomationData";

const PageWrapper = styled.div`
  display: grid;
  background-color: white;
  width: 49%;
`;

const ImgWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InformationWrapper = () => {
  return (
    <PageWrapper>
      {infos.map((info) => (
        <Information
          title={info.title}
          pup={info.pup}
          pdown={info.pdown}
          button={info.button}
        />
      ))}
      <ImgWrapper>
        <img src={ElephentSafari} />
        <img src={CarSafari} />
        <img src={ZebraSafari} />
      </ImgWrapper>
    </PageWrapper>
  );
};

export default InformationWrapper;
