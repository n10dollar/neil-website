import PianoKeyboard, { KeyToNote } from "components/music/PianoKeyboard.tsx";
import { Center } from "@chakra-ui/react";
import keyToNote from "utils/piano-key-map.json";

const keyPress = (keyID: number) => {
  // console.log(keyID);
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
