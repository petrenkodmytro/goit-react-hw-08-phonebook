import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { BtnLogOut } from './UserMenu.styled';
import { VscSignOut } from 'react-icons/vsc';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
      <VscSignOut />
      </BtnLogOut>
    </div>
  );
};
