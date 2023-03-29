import React from "react";
//Components
import DirtBackground from "../components/dirtBackground";
import DisplayContent from "../components/displayContent";
//Reducers
import { useSelector } from "react-redux";

const Singleplayer = () => {

  const {skills} = useSelector((state) => state.global);
  const [selectedContent, setSelectedContent] = React.useState(null);

  return (
    <DirtBackground title={"Singleplayer"} selectedContent={selectedContent}>
      {DisplayContent(skills, selectedContent, setSelectedContent)}
    </DirtBackground>
  );
}

export default Singleplayer;


export const Head = () => <title>Skills</title>