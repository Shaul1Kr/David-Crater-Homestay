import styled from "styled-components";

const PageWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 3rem;
`;

const Wrapper = styled.div`
  display: grid;
`;

const Title = styled.h1``;

const ParagraphUp = styled.p``;

const ParagraphDown = styled.p``;

const Button = styled.button`
  padding: 0.5rem 4rem;
  height: fit-content;
  margin-top: 1.5rem;
  background-color: cornflowerblue;
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
  justify-self: end;
`;

interface InformationProps {
  title: string;
  pup: string;
  pdown: string;
  button: string;
}

const Information = ({ title, pup, pdown, button }: InformationProps) => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Wrapper>
          <ParagraphUp>{pup}</ParagraphUp>
          <ParagraphDown>{pdown}</ParagraphDown>
          <Button>{button}</Button>
        </Wrapper>
      </InfoWrapper>
    </PageWrapper>
  );
};

export default Information;
