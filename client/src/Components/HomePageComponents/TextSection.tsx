import styled from "styled-components";
import TripAdvisor from "../../assets/Pictures/TripAdvisorReviews_PNG.png";

const TextImgContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 5rem;
  gap: 8rem;
`;

const TextContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 3rem 0 30rem;
  color: white;
`;

const FirstText = styled.h1`
  text-align: center;
`;
const SecondtText = styled.h3`
  text-align: center;
`;
const ThirdText = styled.p`
  text-align: center;
`;

const Line = styled.div`
  background-color: white;
  height: 0.2rem;
  width: 10%;
  justify-self: center;
`;

const TextSection = () => {
  return (
    <TextImgContainer>
      <TextContainer>
        <FirstText>COME, STAY WITH US!</FirstText>
        <Line />
        <SecondtText>
          Close to the center of Arusha, with rooms available to suit everyone.
          A perfect base to explore the area.
        </SecondtText>
        <Line />
        <ThirdText>
          More than a good night’s sleep ... we've travelled around the world
          and try to make our guest's experience at Nyumbani reflect the great
          times we have had when travelling ourselves. Our aim is to provide a
          warm and friendly atmosphere in a comfortable, home-from-home
          environment.
        </ThirdText>
      </TextContainer>
      <img src={TripAdvisor} />
    </TextImgContainer>
  );
};

export default TextSection;
