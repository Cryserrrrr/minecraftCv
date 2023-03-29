import React from 'react';
//Tools
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Play from '../../utils/play';
//Reducers
import { useSelector } from 'react-redux';

export const SkillContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: row;
  width: calc(100% - 40px);
  height: 150px;
  padding: 13px 10px 13px 13px;
  user-select: none;
  ${props => props.title === props.selectedContent ? "padding: 10px 10px 10px 10px" : null};
  ${props => props.title === props.selectedContent ? "border: 3px solid #6f6f6f" : null};
  ${props => props.title === props.selectedContent ? "background: rgba(0,0,0,.9)" : null};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: #DDD;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const Description = styled.div`
  font-size: 1.2rem;
  color: #6f6f6f;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const DisplayContent = (contents, selectedContent, setSelectedContent) => {

  const { sound } = useSelector(state => state.global);

  const handleDoubleClick = (content) => {
    sound && Play();
    navigate(`/detailled/${content.title}`);
  };

  return contents?.map((content) => {
    return (
      <SkillContainer key={content.title} title={content.title} selectedContent={selectedContent} onClick={() => setSelectedContent(content.title)} onDoubleClick={() => handleDoubleClick(content)}>
        <Img src={content.image} />
        <TextContainer>
          <Title>{content.title}</Title>
          <Description>{content.description}</Description>
        </TextContainer>
      </SkillContainer>
    );
  });
};

export default DisplayContent;