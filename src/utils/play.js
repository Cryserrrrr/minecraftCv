import buttonSound from '../sounds/buttonSound.mp3';
import orbSound from '../sounds/orb.mp3';
import levelup from '../sounds/levelup.mp3';

function Play(sound = false) {

  let audio
  if (!sound) {
    audio = new Audio(buttonSound);
  } else if (sound === "orb") {
    audio = new Audio(orbSound);
  } else if (sound === "lvlup") {
    audio = new Audio(levelup);
  }
  audio.play()

  return null;
}

export default Play;