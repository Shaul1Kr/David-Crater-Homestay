import logo from "../assets/logo-color.png";
import styled from "styled-components";

const buttons = [
  { label: "Home" },
  { label: "Rooms" },
  { label: "Tours & Safaris" },
  { label: "Book" },
  { label: "More" },
];

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  background-color: #3674aa;
  gap: 3rem;
`;

const Logo = styled.img`
  width: 20%;
`;

const Buttons = styled.div``;

const Button = styled.button`
  border: 0;
  background-color: inherit;
  cursor: pointer;
  font-size: 2rem;
  :hover {
    color: blue;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo src={logo} alt="Logo" />
      <Buttons>
        {buttons.map((button) => (
          <Button>{button.label}</Button>
        ))}
      </Buttons>
    </Header>
  );
};

export default HeaderComponent;
