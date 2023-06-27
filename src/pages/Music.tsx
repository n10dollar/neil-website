import { Center } from "@chakra-ui/react";
import PianoKeyboard from "components/music/PianoKeyboard.tsx";
import { generateWaveArray, sawSnapshot } from "utils/soundGenerator.ts";
import keyToNote from "utils/piano-key-map.json";

const keyPress = (keyID: number) => {
  // console.log(keyID);
  // playSound(keyID);
  const arr = generateWaveArray(1000, 50, sawSnapshot);
  console.log(arr);
  return { fill: "red" };
};

const Music = () => {
  return (
    <>
      <div>Music</div>
      <Center>
        <PianoKeyboard
          octaves={1}
          whiteKeyWidth={60}
          keyToNote={keyToNote}
          onPress={keyPress}
        />
      </Center>
    </>
  );
};

export default Music;
