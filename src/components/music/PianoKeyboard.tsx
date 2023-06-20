import { Layer, Rect, Stage } from "react-konva";
import { useState } from "react";

interface Props {
  whiteKeyWidth: number;
  whiteKeyColor?: string;
  blackKeyColor?: string;
  onClick: () => NonNullable<unknown>;
}

const xStart = 0;
const yStart = 0;

const octaves = 2;
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

const PianoKeyboard = ({
  whiteKeyWidth,
  whiteKeyColor = "white",
  blackKeyColor = "black",
  onClick,
}: Props) => {
  const [pressed, setPressed] = useState([
    ...Array(octaves * keysPerOctave).fill(false),
  ]);

  const width = octaves * whiteKeysPerOctave * whiteKeyWidth;
  const height = octaves * whiteKeyHeight;

  return (
    <Stage width={width} height={height}>
      <Layer>
        {[...Array(octaves * whiteKeysPerOctave)].map((_, index) => (
          <Rect
            onPointerClick={() =>
              setPressed(pressed.map((_, i) => i === whiteIndex(index)))
            }
            y={yStart}
            width={whiteKeyWidth}
            height={whiteKeyHeight}
            fill={whiteKeyColor}
            stroke={"black"}
            strokeWidth={1}
            x={xStart + whitePosition(index)}
            {...(pressed[whiteIndex(index)] ? onClick() : null)}
          />
        ))}
      </Layer>
      <Layer>
        {[...Array(octaves * blackKeysPerOctave)].map((_, index) => (
          <Rect
            onPointerClick={() =>
              setPressed(pressed.map((_, i) => i === blackIndex(index)))
            }
            y={yStart}
            width={blackKeyWidth}
            height={blackKeyHeight}
            fill={blackKeyColor}
            stroke={"black"}
            strokeWidth={1}
            x={xStart + blackPosition(index)}
            {...(pressed[blackIndex(index)] ? onClick() : null)}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default PianoKeyboard;
