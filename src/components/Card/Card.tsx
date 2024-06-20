import React from 'react';
import styled from 'styled-components';
import sliderStore from '../../store/slider-store';
import { Input } from './../../UI/Input/Input';
import { ButtonBase, ButtonDelete } from '../../UI/Button/Button';
import { ICard } from '../../types/store-slider-types';

const CardContainer = styled.div`
  flex: 0 0 25%;
  min-width: 200px;
  max-width: 300px;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

interface IPropsCard {
  slide: ICard;
}

const Card: React.FC<IPropsCard> = ({ slide }) => {
  /**
   * Handles the change event for the input element.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object for the input element.
   * @return {void} This function does not return anything.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sliderStore.editSlider(slide.id, e.target.value);
  };

  /**
   * Handles the deletion of a slider.
   *
   * @return {void} This function does not return anything.
   */
  const handleDelete = () => {
    sliderStore.removeSlider(slide.id);
  };

  /**
   * Updates the main card in the slider store with the given slide's id and value.
   *
   * @return {void} This function does not return anything.
   */
  const handleMain = () => {
    const { id, value } = slide;
    if (sliderStore.mainCard) {
      sliderStore.addSlider(sliderStore.mainCard.value);
    }
    sliderStore.mainCard = { id, value };
    sliderStore.removeSlider(id);
  };

  return (
    <CardContainer>
      <Input type="text" value={slide.value} onChange={handleChange} />
      <ButtonContainer>
        <ButtonDelete onClick={handleDelete}>DEL</ButtonDelete>
        <ButtonBase onClick={handleMain}>BASE</ButtonBase>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
