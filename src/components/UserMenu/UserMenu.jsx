import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { BtnLogOut, UserMenuWrapp, UserText } from './UserMenu.styled';
import { VscSignOut } from 'react-icons/vsc';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // витягуємо user зі стейта
  const { user } = useAuth();

  return (
    <UserMenuWrapp>
      {/* <p>{user.name.slice(0, 1).toUpperCase()}</p> */}
      <UserText>{user.name}</UserText>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        <VscSignOut />
      </BtnLogOut>
    </UserMenuWrapp>
  );
};
