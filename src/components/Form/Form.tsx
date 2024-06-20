import { useState } from 'react';
import styled from 'styled-components';
import sliderStore from '../../store/slider-store';

const AddCardContainer = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid #000;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  border: 2px solid green;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: green;
  color: #fff;
`;

const Form = ({}) => {
  const [newCardValue, setNewCardValue] = useState('');

  /**
   * Adds a new card to the slider store with the value from the input field.
   * Resets the input field after adding the card.
   *
   * @return {void}
   */
  const handleAddCard = () => {
    sliderStore.addSlider(newCardValue);
    setNewCardValue('');
  };
  return (
    <AddCardContainer>
      <Input
        placeholder="Напишите название карточки"
        type="text"
        value={newCardValue}
        onChange={(e) => setNewCardValue(e.target.value)}
      />
      <Button disabled={newCardValue ? false : true} onClick={handleAddCard}>
        Добавить
      </Button>
    </AddCardContainer>
  );
};

export default Form;
