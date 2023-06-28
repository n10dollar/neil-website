import { Center } from "@chakra-ui/react";
import PianoKeyboard from "components/music/PianoKeyboard.tsx";
import {
  generateWaveArray,
  playWaveform,
  sawSnapshot,
} from "utils/soundGenerator.ts";
import keyToNote from "utils/piano-key-map.json";

// https://pages.mtu.edu/~suits/notefreqs.html

const keyPress = (keyID: number) => {
  let targetFrequency = 50;
  for (const key in keyToNote) {
    if (keyToNote[key].id == keyID) {
      targetFrequency = keyToNote[key].frequency;
      break;
    }
  }
  const wavePoints = generateWaveArray(1000, targetFrequency, sawSnapshot);
  console.log(targetFrequency);
  console.log(wavePoints);
  playWaveform(wavePoints);
  return { fill: "red" };
};

const Music = () => {
  return (
    <>
      <div>Music</div>
      <Center>
        <PianoKeyboard
          octaves={2}
          whiteKeyWidth={70}
          keyToNote={keyToNote}
          onPress={keyPress}
        />
      </Center>
    </>
  );
};

export default Music;
