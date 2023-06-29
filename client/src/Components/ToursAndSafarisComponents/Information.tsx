import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  background-color: white;
  margin: 4rem 30rem;
  gap: 5rem;
`;

const Title = styled.h1``;

const Wrapper = styled.div`
  display: grid;
`;

const ParagraphUp = styled.p`
  margin-bottom: 2%;
`;

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

const Information = () => {
  return (
    <PageWrapper>
      <Title>Safaris</Title>
      <Wrapper>
        <ParagraphUp>
          The famous Serengeti National Park and Ngorongoro Conservation area
          are home to an impressive range of animals, including giraffes,
          buffalos, elephants, lions, and leopards. With local guides in a
          specially designed safari vehicle, head out on a game drive in search
          of the big five.
        </ParagraphUp>
        <ParagraphDown>
          Our in-house travel agency, Daketi Safari, specializes in tailor-made
          itineraries to suit all travel styles and budgets. They offer a range
          of options from a one day safari in Arusha, to a week-long trip
          through Serengeti National Park, Ngorongoro Conservation Area, Lake
          Manyara National Park, and Tarangire National Park.
        </ParagraphDown>
        <Button>See All Safaris</Button>
      </Wrapper>
    </PageWrapper>
  );
};

export default Information;
