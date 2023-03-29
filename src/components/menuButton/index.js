import React from 'react';
//Tools
import styled from 'styled-components';
import Play from '../../utils/play';
//Images
import disableBackground from '../../images/disableBackground.png';
//Reducers
import { useSelector } from 'react-redux';

const MinecraftButton = styled.button`
  height: 50px;
  width: ${props => props.halfButton ? '240px' : '500px'};
	cursor: ${props => props.disabled ? '' : 'pointer'};
	overflow: hidden;
	white-space: nowrap;
	user-select: none;
  font-family: 'Minecraftia';
  padding: 0;
  margin-left: ${props => props.margin ? '10px' : '0'};
  margin-right: ${props => props.margin ? '10px' : '0'};

	background: ${props => props.disabled ? `url(${disableBackground}) center / cover` : "url('https://i.ibb.co/rb2TWXL/bgbtn.png') center / cover"};
	image-rendering: pixelated;
	border: 2px solid #000;
  margin-bottom: 1em;
  outline: none;

  @media (max-width: 1050px) {
    width: ${props => props.option ? '400px' : props.halfButton ? '240px' : '500px'};
  }

  @media (max-width: 768px) {
    width: ${props => props.option ? '250px' : props.halfButton ? '240px' : '500px'};
  }

  @media (max-width: 500px) {
    width: ${props => props.option ? '40%' : props.halfButton ? '45%' : '80%'};
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: .3em;
  font-size: 1.5em;
  
  color: ${props => props.disabled ? "#9f9f9f" : "#DDD"};
  text-shadow: 2px 2px #000A;
  ${props => !props.disabled && "box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;"}

	&:hover {
		${ props => !props.disabled && "background-color: rgba(100, 100, 255, .45);"}
		${props => !props.disabled && "text-shadow: 2px 2px #202013CC;"}
		${props => !props.disabled && "color: #FFFFA0;"}
	}
  
	&:active {
		${props => !props.disabled && "box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;"}
	}

  @media (max-width: 500px) {
    font-size: 1.2em;
  }
`

const MenuButton = ({children, onClick, type, disable, halfButton, margin, option, play = true}) => {  

  const { sound } = useSelector(state => state.global);
  const handleClick = () => {
    if (!disable) {
      if (play)
      sound && Play();
      onClick();
    }
  }

  return (
    <MinecraftButton
      halfButton={halfButton}
      margin={margin}
      option={option}
      disabled={disable}
    >
      <Title
        onClick={handleClick}
        type={type}
        disabled={disable}
      >
        {children}
      </Title>
    </MinecraftButton>
  );
}

export default MenuButton;