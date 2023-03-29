import React from 'react';
//Music
import Haggstrom from '../sounds/Haggstrom.mp3';
import Key from '../sounds/Key.mp3';
import Minecraft from '../sounds/Minecraft.mp3';
import Moog_City from '../sounds/Moog_City.mp3';
import Subwoofer_Lullaby from '../sounds/Subwoofer_Lullaby.mp3';
import Sweden from '../sounds/Sweden.mp3';
import Wet_Hands from '../sounds/Wet_Hands.mp3';
//Reducers
import { useSelector } from 'react-redux';

const musicArray = [Haggstrom, Key, Minecraft, Moog_City, Subwoofer_Lullaby, Sweden, Wet_Hands];
const randomMusic = musicArray[Math.floor(Math.random() * musicArray .length)];

const HomeMusic = () => {
  const { music } = useSelector(state => state.global);
  const [start, setStart] = React.useState(false);
  const [audio, setAudio] = React.useState(null);

  React.useEffect(() => {
    setAudio(new Audio(randomMusic));
  }, []);

  React.useEffect(() => {
    if (music && music != 0 && !start) {
      setStart(true);
      audio.loop = true;  
      audio.volume = music / 100;
      audio.play();
    } else if (audio) {
      audio.volume = music / 100;
    }
  }, [music]);


  return null;
}

export default HomeMusic;