import styled from 'styled-components';
import ImageSection from './components/ImageSection';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Container>
      <ImageSection/>
      <LoginPage/>
    </Container>
  );
}

const Container = styled.div`
  display : flex;
  height : 100%;
  box-sizing : border-box;
  align-items: center;

  @media (min-width: 0) and (max-width: 750px){
    margin : 30px;
  }
`;


export default App;
