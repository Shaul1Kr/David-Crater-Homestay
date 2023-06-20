import logo from "../assets/logo-color.svg";
import styled from "styled-components";

const buttons = [
  { id: 1, href: "1", label: "1" },
  { id: 2, href: "2", label: "2" },
  { id: 13, href: "13", label: "13" },
  { id: 14, href: "14", label: "14" },
];

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 20%;
`;

const Button = styled.button`
  background-color: #000;
  color: white;
  width: 20%;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo src={logo} alt="Logo" />
      <div className="buttons">
        {buttons.map((button) => (
          <Button>{button.label}</Button>
        ))}
      </div>
    </Header>
  );
};

export default HeaderComponent;
