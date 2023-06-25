import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const ExploreWrapper = styled.div`
  display: flex;
`;

const Label = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const ExploreButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  background-color: #4848b3;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;

const Img = styled.img``;

interface ExploringWrapperProps {
  image: string;
  label: string;
  text: string;
}

const ExploringWrapper = ({ image, label, text }: ExploringWrapperProps) => {
  return (
    <ExploreWrapper>
      <Img src={image} />
      <Wrapper>
        <Label>{label}</Label>
        <Text>{text}</Text>
        <ExploreButton>Explore</ExploreButton>
      </Wrapper>
    </ExploreWrapper>
  );
};

export default ExploringWrapper;
