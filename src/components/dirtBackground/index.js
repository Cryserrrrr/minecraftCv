import React from "react";
//Tools
import styled from "styled-components";
import { navigate } from "gatsby";
//Images
import DirtBg from "../../images/dirtBackground.webp";
//Components
import MenuButton from "../menuButton";

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
  font-family: 'Minecraftia';
`;

const ScrollableContainer = styled.div`
  background-image: url(${DirtBg});
  background-repeat: no-repeat;
  background: rgba(0,0,0,.5);
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 2.2rem;
  color: #DDD;
  padding-bottom: 20px;

  @media (max-width: 500px) {
    height: 70px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 150px;
  width: 100%;
`;

const Scrollable = styled.div`
  height: calc(100vh - 300px);
  width: 50%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 1240px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DirtBackground = ({children, title, selectedContent}) => {

  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <ScrollableContainer>
        <Scrollable>
          {children}
        </Scrollable>
      </ScrollableContainer>
      <ButtonContainer>
        <MenuButton margin={true} onClick={() => navigate(`/detailled/${selectedContent}`)} disable={!selectedContent}>See the details</MenuButton>
        <MenuButton onClick={() => navigate("/")} margin={true}>Cancel</MenuButton>
      </ButtonContainer>
    </Container>
  );
}

export default DirtBackground;