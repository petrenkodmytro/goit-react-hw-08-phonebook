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
    </section>
  );
};

export default HomePage;
