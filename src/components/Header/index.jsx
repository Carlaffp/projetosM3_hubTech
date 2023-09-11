import logo from "../../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { StyledHeader, StyledHeader1, StyledHeader2 } from "./Header";

export const Header = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      {pathname == "/register" ? (
        <StyledHeader1>
          <img src={logo} alt="Kenzie Hub" />
          {children}
        </StyledHeader1>
      ) : null}
      {pathname == "/dashboard" ? (
        <StyledHeader2>
          <img src={logo} alt="Kenzie Hub" />
          {children}
        </StyledHeader2>
      ) : null}
      {pathname == "/" ? (
        <StyledHeader>
          <img src={logo} alt="Kenzie Hub" />
          {children}
        </StyledHeader>
      ) : null}
    </div>
  );
};
