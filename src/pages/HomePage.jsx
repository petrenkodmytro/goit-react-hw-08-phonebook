import styled from 'styled-components';

export const Text = styled.p`
 text-align: center;
 line-height: 1.5;
 font-size: 18px;
`;

const HomePage = () => {
  return (
    <section>
      <Text>PhoneBook App</Text>
      <Text>Welcome to your personal PhoneBook</Text>
      <Text>Please, SingUp or LogIn to your account</Text>
      <img src='https://play-lh.googleusercontent.com/h6z0ro9wtsxb20fgLaIDXJrXtWqDyvm_Bnfk-q3JFbg08R2PgNq8ZSAoUX1DYDXLofPD' alt='phonebook' />
    </section>
  );
};

export default HomePage;
