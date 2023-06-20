import PianoKeyboard from "components/music/PianoKeyboard.tsx";
import { Center } from "@chakra-ui/react";

const keyClick = () => {
  return { fill: "blue" };
};

const Music = () => {
  return (
    <>
      <div>Music</div>
      <Center>
        <PianoKeyboard whiteKeyWidth={60} onClick={keyClick} />
      </Center>
    </>
  );
};

export default Music;
