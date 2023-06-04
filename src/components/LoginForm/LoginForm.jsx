import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AuthForm, AuthFormLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <AuthForm onSubmit={handleSubmit} autoComplete="off">
      <AuthFormLabel>
        Email
        <input type="email" name="email" />
      </AuthFormLabel>
      <AuthFormLabel>
        Password
        <input type="password" name="password" />
      </AuthFormLabel>
      <button type="submit">Log In</button>
    </AuthForm>
  );
};
