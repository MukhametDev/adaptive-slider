import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import sliderStore from '../../store/slider-store';
import Card from '../Card/Card';
import MainCard from '../MainCard/MainCard';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  position: relative;
  padding: 10px;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &.prev {
    left: -15px;
  }

  &.next {
    right: -15px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 300px);
  overflow: hidden;
  position: relative;
  margin-left: 300px;
`;

const SlideTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 300}px);
`;

const MainContainerCard = styled.div`
  flex: 0 0 300px;
  min-width: 200px;
  max-width: 300px;
  border-right: 1px solid #000;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #002b5c;
`;

interface IPropsSlider {}

const Slider: React.FC<IPropsSlider> = observer(() => {
  const { sliders, mainCard, currentIndex } = sliderStore;
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  /**
   * Updates the visibility of the navigation buttons based on the current slider position.
   */
  useEffect(() => {
    const updateButtonVisibility = () => {
      const sliderElement = sliderRef.current;
      if (sliderElement) {
        const slideWidth = 300;
        const totalSlidesWidth = slideWidth * sliders.length;

        setShowPrev(currentIndex > 0);
        setShowNext((currentIndex + 1) * slideWidth < totalSlidesWidth);
      }
    };

    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility);

    return () => {
      window.removeEventListener('resize', updateButtonVisibility);
    };
  }, [currentIndex, sliders.length]);

  /**
   * Handles the previous slide in the slider.
   *
   * @return {void} This function does not return anything.
   */
  const handlePrev = () => {
    if (currentIndex > 0) {
      sliderStore.prev();
    }
  };

  /**
   * Handles the next slide in the slider.
   *
   * @return {void} This function does not return anything.
   */
  const handleNext = () => {
    if (currentIndex < sliders.length - 1) {
      sliderStore.next();
    }
  };

  if (sliders.length === 0) {
    return null;
  }

  return (
    <SliderWrapper>
      <SliderContainer ref={sliderRef}>
        <MainContainerCard>
          {mainCard ? <MainCard /> : <Text>Добавьте главную карточку!</Text>}
        </MainContainerCard>
        <CardsContainer>
          <SlideTrack currentIndex={currentIndex}>
            {sliders.map((slide) => (
              <Card key={slide.id} slide={slide} />
            ))}
          </SlideTrack>
        </CardsContainer>
      </SliderContainer>
      {showPrev && (
        <NavButton className="prev" onClick={handlePrev}>
          <FaArrowAltCircleLeft style={{ color: 'blue' }} />
        </NavButton>
      )}
      {showNext && (
        <NavButton className="next" onClick={handleNext}>
          <FaArrowAltCircleRight style={{ color: 'blue' }} />
        </NavButton>
      )}
    </SliderWrapper>
  );
});

export default Slider;
