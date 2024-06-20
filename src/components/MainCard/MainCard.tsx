import styled from 'styled-components';
import sliderStore from '../../store/slider-store';
import { observer } from 'mobx-react-lite';
import { Input } from '../../UI/Input/Input';
import { ButtonMainCard } from '../../UI/Button/Button';

const MainCardContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainCard = observer(({}) => {
  const { mainCard } = sliderStore;

  if (!mainCard) return null;

  const handleRemove = () => {
    sliderStore.removeBaseSlider(mainCard.id);
  };
  return (
    <MainCardContainer>
      <Input
        type="text"
        value={mainCard.value}
        onChange={(e) =>
          sliderStore.editMainSlider(mainCard.id, e.target.value)
        }
      />
      <ButtonMainCard onClick={handleRemove}>DEL</ButtonMainCard>
    </MainCardContainer>
  );
});

export default MainCard;
