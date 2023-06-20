import Keys from "src/utils/piano-key-map.json";
import { Layer, Rect, Stage } from "react-konva";
import { useState } from "react";

const width = window.innerWidth;
const height = window.innerHeight;
const xStart = 20;
const yStart = 20;

const octaves = 2;
const whiteKeysPerOctave = 7;
const blackKeysPerOctave = 5;
const keysPerOctave = 12;

const whiteHeightWidthRatio = 6 / (7 / 8);
const blackHeightWidthRatio = 3.5 / (1 / 2);

const whiteKeyWidth = 60;
const whiteKeyHeight = whiteKeyWidth * whiteHeightWidthRatio;
const blackKeyWidth = (60 * 4) / 7;
const blackKeyHeight = blackKeyWidth * blackHeightWidthRatio;

const PianoKeyboard = () => {
  // const [whitePressed, setWhitePressed] = useState([
  //   ...Array(octaves * whiteKeysPerOctave).fill(false),
  // ]);
  // const [blackPressed, setBlackPressed] = useState([
  //   ...Array(octaves * blackKeysPerOctave).fill(false),
  // ]);

  const [pressed, setPressed] = useState([
    ...Array(octaves * keysPerOctave).fill(false),
  ]);

  return (
    <Stage width={width} height={height}>
      <Layer>
        {[...Array(octaves * whiteKeysPerOctave)].map((_, index) => (
          <Rect
            onPointerClick={() =>
              setWhitePressed(whitePressed.map((_, pIndex) => pIndex === index))
            }
            x={xStart + index * whiteKeyWidth}
            y={yStart}
            width={whiteKeyWidth}
            height={whiteKeyHeight}
            fill={!whitePressed[index] ? "lightgray" : "blue"}
            stroke={"black"}
            strokeWidth={1}
          />
        ))}
      </Layer>
      <Layer>
        {blackPressed.map((_, index) => (
          <Rect
            onPointerClick={() => {
              setBlackPressed(blackPressed.map((_, index) => pIndex === index));
              console.log(blackPressed);
            }}
            x={
              xStart +
              (index +
                (Math.floor((index + 3) / 5) +
                  Math.floor((index + 1) / 5) +
                  1)) *
                whiteKeyWidth -
              blackKeyWidth / 2
            }
            y={yStart}
            width={blackKeyWidth}
            height={blackKeyHeight}
            fill={!blackPressed[index] ? "black" : "blue"}
            stroke={"black"}
            strokeWidth={1}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default PianoKeyboard;
