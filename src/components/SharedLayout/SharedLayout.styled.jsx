import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 15px; */
`;

export const Header = styled.header`
  width: 1280px;
  > p {
    text-align: center;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
  }
  /* display: flex;
  flex-direction: column  ;
  align-items: center; */
`;

export const Main = styled.main`
  flex: 1 1 auto;
  max-width: 1280px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Footer = styled.footer`
  /* padding-left: 20px; */
  margin-top: 20px;
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 10px;
`;
