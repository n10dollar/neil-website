import { Layer, Rect, Stage } from "react-konva";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

export interface KeyToNote {
  [key: string]: { id: number; octave: number; note: string };
}

export interface KeyboardSounds {
  [keyID: number]: HTMLAudioElement;
}

interface Props {
  octaves: number;
  whiteKeyWidth: number;
  whiteKeyColor?: string;
  blackKeyColor?: string;
  keyToNote: KeyToNote;
  onPress: (keyID: number) => NonNullable<unknown>;
}

const xStart = 0;
const yStart = 0;

const whiteKeysPerOctave = 7;
const blackKeysPerOctave = 5;
const keysPerOctave = 12;

const whiteHeightWidthRatio = 6 / (7 / 8);
const blackHeightWidthRatio = 3.5 / (1 / 2);

const whiteKeyWidth = 60;
const whiteKeyHeight = whiteKeyWidth * whiteHeightWidthRatio;
const blackKeyWidth = whiteKeyWidth * (4 / 7);
const blackKeyHeight = blackKeyWidth * blackHeightWidthRatio;

const whiteIndex = (key: number) => {
  return key * 2 - Math.floor((key + 4) / 7) - Math.floor(key / 7);
};
const blackIndex = (key: number) => {
  return 1 + key * 2 + Math.floor((key + 3) / 5) + Math.floor(key / 5);
};
const whitePosition = (key: number) => {
  return key * whiteKeyWidth;
};
const blackPosition = (key: number) => {
  return (
    (key + 1 + Math.floor((key + 3) / 5) + Math.floor(key / 5)) *
      whiteKeyWidth -
    blackKeyWidth / 2
  );
};

export const playSound = (soundURL: string) => {
  new Audio(soundURL).play();
};

const PianoKeyboard = ({
  octaves = 2,
  whiteKeyWidth,
  whiteKeyColor = "white",
  blackKeyColor = "black",
  keyToNote,
  onPress,
}: Props) => {
  const [pressed, setPressed] = useState([
    ...Array(octaves * keysPerOctave).fill(false),
  ]);

  const width = octaves * whiteKeysPerOctave * whiteKeyWidth + xStart;
  const height = whiteKeyHeight + yStart;

  return (
    <Box
      tabIndex={-1}
      onKeyDown={(key) =>
        setPressed(
          pressed.map((keyPressed, i) =>
            i === keyToNote[key.key].id - 1 ? true : keyPressed
          )
        )
      }
      onKeyUp={(key) =>
        setPressed(
          pressed.map((keyPressed, i) =>
            i === keyToNote[key.key].id - 1 ? false : keyPressed
          )
        )
      }
    >
      <Stage width={width} height={height}>
        <Layer>
          {[...Array(octaves * whiteKeysPerOctave)].map((_, index) => (
            <Rect
              onMouseDown={() =>
                setPressed(
                  pressed.map((keyPressed, i) =>
                    i === whiteIndex(index) ? true : keyPressed
                  )
                )
              }
              onMouseUp={() =>
                setPressed(
                  pressed.map((keyPressed, i) =>
                    i === whiteIndex(index) ? false : keyPressed
                  )
                )
              }
              y={yStart}
              width={whiteKeyWidth}
              height={whiteKeyHeight}
              fill={whiteKeyColor}
              stroke={"black"}
              strokeWidth={1}
              x={xStart + whitePosition(index)}
              {...(pressed[whiteIndex(index)]
                ? onPress(whiteIndex(index))
                : null)}
            />
          ))}
        </Layer>
        <Layer>
          {[...Array(octaves * blackKeysPerOctave)].map((_, index) => (
            <Rect
              onMouseDown={() =>
                setPressed(
                  pressed.map((keyPressed, i) =>
                    i === blackIndex(index) ? true : keyPressed
                  )
                )
              }
              onMouseUp={() =>
                setPressed(
                  pressed.map((keyPressed, i) =>
                    i === blackIndex(index) ? false : keyPressed
                  )
                )
              }
              y={yStart}
              width={blackKeyWidth}
              height={blackKeyHeight}
              fill={blackKeyColor}
              stroke={"black"}
              strokeWidth={1}
              x={xStart + blackPosition(index)}
              {...(pressed[blackIndex(index)]
                ? onPress(blackIndex(index))
                : null)}
            />
          ))}
        </Layer>
      </Stage>
    </Box>
  );
};

export default PianoKeyboard;
