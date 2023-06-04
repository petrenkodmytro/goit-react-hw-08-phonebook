
import { NavWrapper } from "./AppBar.styled";

import { useAuth } from "hooks/useAuth";
import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  return (
    <>
      <p>PhoneBook App</p>
      <NavWrapper>
      
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      </NavWrapper>
    </>
  );
};
