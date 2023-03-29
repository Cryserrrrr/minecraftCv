import React, { useEffect, useState } from "react";
//Tools
import styled from "styled-components";
import { navigate } from "gatsby";
//Images
import DirtBg from "../../images/dirtBackground.webp";
//Components
import MenuButton from "../../components/menuButton";
//Reducers
import { useSelector } from "react-redux";

const Container = styled.div`
  background-image: url(${DirtBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  font-family: "Minecraftia";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 2.2rem;
  color: #DDD;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 500px) {
    height: 50px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  height: 50%;
  width: 60%;
  font-size: 1.2rem;
  color: #DDD;
  padding-bottom: 20px;
  opacity: 0.5;
  text-align: center;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 60%;
    width: 80%;
  }

  @media (max-width: 500px) {
    height: 70%;
    width: 90%;
  }
`;

const DetailledSkill = ({title}) => {

  const { skills, experiences } = useSelector(state => state.global);
  const [skill, setSkill] = useState(null);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    setSkill(skills.find(skill => skill.title === title));
    if (!skill) {
      setExperience(experiences.find(experience => experience.title === title));
    }
  }, []); 

  const handleClick = () => {
    if (skill) {
      navigate("/singleplayer");
    } else if (experience) {
      navigate("/multiplayer");
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <DescriptionContainer>
        {skill ? skill.description : experience ? experience.description : "No description found"}
      </DescriptionContainer>
      <ButtonContainer>
        <MenuButton onClick={() => handleClick()}>Cancel</MenuButton>
      </ButtonContainer>
    </Container>
  );
}

export default DetailledSkill;

export const Head = () => <title>detailled</title>