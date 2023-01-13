import styled from 'styled-components';
import ImageSection from './ImageSection';
import LoginPage from './LoginPage';
import { device } from './DeviceSize';
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

  @media ()
`;


export default App;
