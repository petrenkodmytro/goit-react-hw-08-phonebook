import { FcHome } from 'react-icons/fc';
import { StyledNavLink } from 'components/AppBar/AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { BiCameraMovie } from 'react-icons/bi';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
        <FcHome />
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          <BiCameraMovie />
          PhoneBook
        </StyledNavLink>
      )}
    </nav>
  );
};
