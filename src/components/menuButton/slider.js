import React from 'react';
//Tools
import styled from 'styled-components';
import Play from '../../utils/play';
//Components
import disableBackground from '../../images/disableBackground.png';
//Reducers
import { useSelector ,useDispatch } from 'react-redux';

const SliderButton = () => {

  const dispatch = useDispatch();
  const { music, sound } = useSelector(state => state.global);

  const handleMouseDown = event => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = event => {
    const sliderRect = document.querySelector('.slider-track').getBoundingClientRect();
    const newPosition = ((event.clientX - sliderRect.left) / (sliderRect.width + 15)) * 100;
    if (newPosition < 0) {
      dispatch({ type: 'SET_MUSIC', payload: 0 })
    } else if (newPosition > 100) {
      dispatch({ type: 'SET_MUSIC', payload: 100 })
    } else {
      dispatch({ type: 'SET_MUSIC', payload: newPosition })
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleClick = event => {
    if (sound) {
      Play();
    }
    const sliderRect = document.querySelector('.slider-track').getBoundingClientRect();
    const newPosition = ((event.clientX - sliderRect.left) / (sliderRect.width + 15)) * 100;
    if (newPosition < 0) {
      dispatch({ type: 'SET_MUSIC', payload: 0 })
    } else if (newPosition > 100) {
      dispatch({ type: 'SET_MUSIC', payload: 100 })
    } else {
      dispatch({ type: 'SET_MUSIC', payload: newPosition })
    }
  };

  return (
    <SliderContainer>
      <SliderTrack className="slider-track" onClick={e => handleClick(e)}>
        <SliderValue>Music: {Math.round(music)}%</SliderValue>
        <SliderThumb
          className="slider-thumb"
          music={music}
          onMouseDown={handleMouseDown}
        />
      </SliderTrack>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 500px;
  height: 46px;
	border: 2px solid #000;
  margin: 0 10px 14px 10px;
  background: url(${disableBackground}) center / cover;
  position: relative;

  @media (max-width: 1050px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 500px) {
    width: 45%;
  }
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
`;

const SliderThumb = styled.div`
  width: 20px;
  height: 44px;
  background: url('https://i.ibb.co/rb2TWXL/bgbtn.png') center / cover;
  image-rendering: pixelated;
  cursor: pointer;
	border: 2px solid #000;
  left: ${props => props.music}%;
  position: absolute;
  box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;
  margin-right: 24px;
`;

const SliderValue = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
  color: #DDD;
  position: absolute;
  user-select: none;
`;

export default SliderButton;
