import React from "react";
//Components
import DirtBackground from "../components/dirtBackground";
import DisplayContent from "../components/displayContent";
//Reducers
import { useSelector } from "react-redux";

const Multiplayer = () => {

  const {experiences} = useSelector((state) => state.global);
  const [selectedContent, setSelectedContent] = React.useState(null);

  return (
    <DirtBackground title={"Multiplayer"} selectedContent={selectedContent}>
      {DisplayContent(experiences, selectedContent, setSelectedContent)}
    </DirtBackground>
  );
}

export default Multiplayer;

export const Head = () => <title>Experiences</title>