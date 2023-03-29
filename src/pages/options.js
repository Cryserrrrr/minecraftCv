import React from "react";
//Tools
import styled from "styled-components";
import { navigate } from "gatsby";
//Images
import DirtBg from "../images/dirtBackground.webp";
//components
import MenuButton from "../components/menuButton";
import SliderButton from "../components/menuButton/slider";
//Reducers
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  background-image: url(${DirtBg});
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Minecraftia";
`;

const ChildContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  color: #DDD;
  font-size: 2.2rem;
  margin-top: 20px;

  @media (max-width: 500px) {
    height: 150px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 200px;

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const MidContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
`;

const Options = () => {

  const dispatch = useDispatch();
  const { sound, music } = useSelector(state => state.global);

  const handleClick = (link) => {

    if (link && link === "/") {
      navigate(link);
    } else if (link) {
      openLink(link);
    } else {
      dispatch({ type: "TOGGLE_SOUND" });
    }
  }

  const openLink = (link) => {
    window.open(link, "_blank");
  }

  return (
    <Container>
      <ChildContainer>
        <TopContainer>
          Options
          <ButtonContainer>
            <SliderButton>Music: {music}</SliderButton>
            <MenuButton option={true} margin={true} onClick={() => handleClick(false)}>Sound: {sound ? "true" : "false"}</MenuButton>
          </ButtonContainer>
        </TopContainer>
        <MidContainer>
          <ButtonContainer>
            <MenuButton option={true} margin={true} onClick={(e) => e}>Empty</MenuButton>
            <MenuButton option={true} margin={true} onClick={(e) => e}>Empty</MenuButton>
          </ButtonContainer>
          <ButtonContainer>
            <MenuButton option={true} margin={true} onClick={(e) => e}>Empty</MenuButton>
            <MenuButton option={true} margin={true} onClick={(e) => e}>Empty</MenuButton>
          </ButtonContainer>
          <ButtonContainer>
            <MenuButton option={true} onClick={() => handleClick("https://github.com/Cryserrrrr")} margin={true}>GitHub</MenuButton>
            <MenuButton option={true} onClick={() => handleClick("https://www.linkedin.com/in/eliott-le-duc-291980205/")} margin={true}>LinkedIn</MenuButton>
          </ButtonContainer>
          <ButtonContainer>
            <MenuButton option={true} onClick={() => handleClick("mailto:eliott.leduc2002@gmail.com")} margin={true}>eliott.leduc2002@gmail.com</MenuButton>
            <MenuButton option={true} onClick={() => handleClick("tel:0769602038")} margin={true}>0769602038</MenuButton>
          </ButtonContainer>
        </MidContainer>
        <BottomContainer>
          <ButtonContainer>
            <MenuButton onClick={() => handleClick("/")}>Cancel</MenuButton>
          </ButtonContainer>
        </BottomContainer>
      </ChildContainer>
    </Container>
  );
}

export default Options;

export const Head = () => <title>Options</title>