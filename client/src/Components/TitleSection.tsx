import styled from "styled-components";

const BlueContainer = styled.div`
  display: grid;
  background-color: rgb(99, 136, 148);
  font-weight: 400;
  color: white;
  text-align: center;
  padding: 4rem 35rem;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Line = styled.div`
  background-color: white;
  height: 0.2rem;
  width: 10%;
  justify-self: center;
`;

const Paragraph = styled.p`
  margin: 1rem 0;
`;

const BigParagraph = styled.p`
  margin: 1rem 0;
`;

const TitleSection = () => {
  return (
    <BlueContainer>
      <Title>PRIVATE ROOMS</Title>
      <Line />
      <Paragraph>
        All of our rooms are modern and clean with large windows, a private
        bathroom, a mosquito net, a wardrobe and shelves. You can choose from
        two spacious doubles and a large family bedroom. And for those extra
        warm nights we can provide you with a fan.
      </Paragraph>
      <Line />
      <BigParagraph>
        All our room prices include complimentary breakfast and WiFi. Dinner is
        available for a small surcharge. Check-in: 12:00, Check-out: 10:00
      </BigParagraph>
    </BlueContainer>
  );
};

export default TitleSection;
