import { StyledNavLink } from "components/AppBar/AppBar.styled";
import { IoIosPeople } from "react-icons/io";


export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">
          <IoIosPeople />
          Register
        </StyledNavLink>
        <StyledNavLink to="/login">
          <IoIosPeople />
          Log in
        </StyledNavLink>
    </div>
  );
};
