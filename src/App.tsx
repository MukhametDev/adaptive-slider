import styled from 'styled-components';
import Slider from './components/Slider/Slider';
import './css/index.css';
import Form from './components/Form/Form';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #002b5c;
`;
function App() {
  return (
    <AppContainer>
      <Title>Адаптивный слайдер</Title>
      <Form />
      <Slider />
    </AppContainer>
  );
}

export default App;
