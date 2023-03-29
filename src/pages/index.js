import * as React from "react";
//Tools
import styled from "styled-components";
import { navigate } from "gatsby";
import Play from "../utils/play";
//Images
import minecraftBg from "../images/minecraft.jpeg";
import minecraftTitle from "../images/Eliott.png";
//Components
import MenuButton from "../components/menuButton";
//Reducers
import { useDispatch,useSelector } from "react-redux";

//make a blured div to force user to click
const StartMusicDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9); 
`;

const PopUp = styled.div`
  width: 500px;
  height: 100px;
  background: url('https://i.ibb.co/rb2TWXL/bgbtn.png') center / cover;
  image-rendering: pixelated;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset -2px -4px #0006, inset 2px 2px #FFF7;
	border: 2px solid #000;
  cursor: pointer;
  color: #DDD;
  font-family: 'Minecraftia';
  font-size: 1.5rem;
`;

const BgImg = styled.div`
  background-image: url(${minecraftBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(10px);
  transform: scale(1.1);
  animation: move 80s linear infinite;
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`

const MinecraftTitle = styled.img`
  width: 500px;

  @media (max-width: 500px) {
    width: 80%;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 8%;

  @media (max-width: 768px) {
    margin-top: 20%;
  }

  @media (max-width: 500px) {
    margin-top: 40%;
  }
`;

const HalfButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 500px;
  height: 100%;

  @media (max-width: 500px) {
    width: 80%;
`;

const IndexPage = () => {

  const dispatch = useDispatch();
  const { popup } = useSelector(state => state.global);
  const [exp, setExp] = React.useState(0);

  const handleClick = () => {
    dispatch({type: "SET_POPUP", payload: false})
    dispatch({type: "SET_MUSIC", payload: 100})
  }

  const handleDownload = () => {
    setExp(exp + 1);
    const level = getLevelFromExp(exp);
    if (level % 5 === 0 && exp !== 0) {
      Play('lvlup');
    } else {
      Play('orb');
    }
  }

  const getLevelFromExp = (experience)  => {
    if (experience > 1395) {
      return (Math.sqrt(72 * experience - 54215) + 325) / 18;
    }
    if (experience > 315) {
      return Math.sqrt(40 * experience - 7839) / 10 + 8.1;
    }
    if (experience > 0) {
      return Math.sqrt(experience + 9) - 3;
    }
    return 0;
  }

  return (
    <>
      { popup &&
        <StartMusicDiv>
          <PopUp onClick={handleClick}>
            <div>Start Music</div>
          </PopUp>
        </StartMusicDiv>
      }
      <BgImg />
      <TitleContainer>
        <MinecraftTitle src={minecraftTitle} />
      </TitleContainer>
      <ButtonContainer>
        <MenuButton onClick={() => navigate('/singleplayer')}>Singleplayer</MenuButton>
        <MenuButton onClick={() => navigate('/multiplayer')}>Multiplayer</MenuButton>
        <HalfButtonContainer>
          <MenuButton halfButton={true} onClick={() => navigate('/options')}>Options...</MenuButton>
          <MenuButton halfButton={true} onClick={handleDownload} play={false}>Quit Game</MenuButton>
        </HalfButtonContainer>
      </ButtonContainer>
    </>   
  )
}
export default IndexPage

export const Head = () => <title>Minecraft Resume</title>