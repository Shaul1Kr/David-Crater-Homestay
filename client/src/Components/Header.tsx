import logo from "../assets/logos/logo-color.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const buttons = [
  { label: "Home", link: "" },
  { label: "Rooms", link: "Rooms" },
  { label: "Tours & Safaris", link: "ToursAndSafaris" },
  { label: "Book", link: "" },
  { label: "More", link: "" },
];

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3674aa;
  gap: 3rem;
  padding: 1rem;
`;

const Logo = styled.img`
  width: 20%;
`;

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`;

const Button = styled.button`
  border: 0;
  background-color: inherit;
  cursor: pointer;
  font-size: 2rem;
  outline-style: none;
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
          <Button>
            <Link to={button.link}>{button.label}</Link>
          </Button>
        ))}
      </Buttons>
    </Header>
  );
};

export default HeaderComponent;
