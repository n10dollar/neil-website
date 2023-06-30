import { Center } from "@chakra-ui/react";
import PianoKeyboard, {
  findFreqWithID,
  octave,
} from "components/music/PianoKeyboard.tsx";
import {
  generateWaveArray,
  playWaveform,
  sawSnapshot,
  squareSnapshot,
} from "utils/soundGenerator.ts";
import keyToNote from "utils/piano-key-map.json";

// https://pages.mtu.edu/~suits/notefreqs.html

const keyPressFunc = (keyID: number) => {
  const wavePoints = generateWaveArray(
    1000,
    findFreqWithID(keyID, keyToNote) * octave(4),
    squareSnapshot
  );
  playWaveform(wavePoints);
  console.log(wavePoints);
};

const keyPressProps = { fill: "lightblue" };

const Music = () => {
  return (
    <>
      <div>Music</div>
      <Center>
        <PianoKeyboard
          octaves={1}
          whiteKeyWidth={70}
          keyToNote={keyToNote}
          onPressProps={keyPressProps}
          onPressFunc={keyPressFunc}
        />
      </Center>
    </>
  );
};

export default Music;
