import { Layer, Rect, Stage } from "react-konva";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import keyToNote from "utils/piano-key-map.json";

export interface KeyToNote {
  [key: string]: {
    id: number;
    frequency: number;
    octave: number;
    note: string;
  };
}

interface Props {
  octaves: number;
  whiteKeyWidth: number;
  whiteKeyColor?: string;
  blackKeyColor?: string;
  keyToNote: KeyToNote;
  onPressProps: NonNullable<unknown>;
  onPressFunc: (keyID: number) => void;
}

const xStart = 0;
const yStart = 0;

const whiteKeysPerOctave = 7;
const blackKeysPerOctave = 5;
const keysPerOctave = 12;

const whiteHeightWidthRatio = 6 / (7 / 8);
const blackHeightWidthRatio = 3.5 / (1 / 2);

const whiteIndex = (key: number) => {
  return key * 2 - Math.floor((key + 4) / 7) - Math.floor(key / 7);
};
const blackIndex = (key: number) => {
  return 1 + key * 2 + Math.floor((key + 3) / 5) + Math.floor(key / 5);
};
const whitePosition = (key: number, whiteKeyWidth: number) => {
  return key * whiteKeyWidth;
};
const blackPosition = (
  key: number,
  whiteKeyWidth: number,
  blackKeyWidth: number
) => {
  return (
    (key + 1 + Math.floor((key + 3) / 5) + Math.floor(key / 5)) *
      whiteKeyWidth -
    blackKeyWidth / 2
  );
};

export function findFreqWithID(keyID: number, keyToNote) {
  for (const key in keyToNote) {
    if (keyToNote[key].id == keyID) return keyToNote[key].frequency;
  }
}

export function octave(octave: number) {
  return Math.pow(2, octave - 1);
}

const PianoKeyboard = ({
  octaves = 2,
  whiteKeyWidth,
  whiteKeyColor = "white",
  blackKeyColor = "black",
  keyToNote,
  onPressProps,
  onPressFunc,
}: Props) => {
  const [pressed, setPressed] = useState([
    ...Array(octaves * keysPerOctave).fill(false),
  ]);
  useEffect(() => {
    const keysActive: number[] = [];
    pressed.map((key, index) => (key ? keysActive.push(index) : null));
    const interval = setInterval(() => {
      keysActive.map((key: number) => onPressFunc(key));
    }, 100);

    return () => clearInterval(interval);
  }, [pressed]);

  const whiteKeyHeight = whiteKeyWidth * whiteHeightWidthRatio;
  const blackKeyWidth = whiteKeyWidth * (4 / 7);
  const blackKeyHeight = blackKeyWidth * blackHeightWidthRatio;

  const width = octaves * whiteKeysPerOctave * whiteKeyWidth + xStart;
  const height = whiteKeyHeight + yStart;

  return (
    <Box
      tabIndex={0}
      onKeyDown={(key) =>
        setPressed(
          pressed.map((keyPressed, i) =>
            i == keyToNote[key.key].id ? true : keyPressed
          )
        )
      }
      onKeyUp={(key) =>
        setPressed(
          pressed.map((keyPressed, i) =>
            i == keyToNote[key.key].id ? false : keyPressed
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
              x={xStart + whitePosition(index, whiteKeyWidth)}
              {...(pressed[whiteIndex(index)] ? onPressProps : null)}
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
              x={xStart + blackPosition(index, whiteKeyWidth, blackKeyWidth)}
              {...(pressed[blackIndex(index)] ? onPressProps : null)}
            />
          ))}
        </Layer>
      </Stage>
    </Box>
  );
};

export default PianoKeyboard;
