import Keys from "src/utils/piano-key-map.json";
import { Layer, Rect, Stage } from "react-konva";
import { useState } from "react";

const width = window.innerWidth;
const height = window.innerHeight;
const xStart = 20;
const yStart = 20;

const octaves = 2;
const whiteKeysPerOctave = 7;
const keysPerOctave = 12;

const whiteHeightWidthRatio = 6 / (7 / 8);
const blackHeightWidthRatio = 3.5 / (1 / 2);

const whiteKeyWidth = 60;
const whiteKeyHeight = whiteKeyWidth * whiteHeightWidthRatio;
const blackKeyWidth = (60 * 4) / 7;
const blackKeyHeight = blackKeyWidth * blackHeightWidthRatio;

const PianoKeyboard = () => {
  const [pressed, setPressed] = useState([
    ...Array(octaves * keysPerOctave).fill(false),
  ]);

  return (
    <Stage width={width} height={height}>
      <Layer zIndex={0}>
        {[...Array(octaves * whiteKeysPerOctave).keys()].map((key) => (
          <Rect
            onClick={() =>
              setPressed(
                pressed.map((keyPressed, index) =>
                  index === key ? true : keyPressed
                )
              )
            }
            x={xStart + key * whiteKeyWidth}
            y={yStart}
            width={whiteKeyWidth}
            height={whiteKeyHeight}
            fill={!pressed[key] ? "lightgray" : "blue"}
            stroke={"black"}
            strokeWidth={1}
          />
        ))}
      </Layer>
      <Layer zIndex={1}>
        {[...Array(octaves * whiteKeysPerOctave).keys()].map((key) =>
          (key + 5) % 7 === 0 || (key + 1) % 7 === 0 ? null : (
            <Rect
              onClick={() =>
                setPressed(
                  pressed.map((keyPressed, index) =>
                    index === key ? true : keyPressed
                  )
                )
              }
              x={xStart + (key + 1) * whiteKeyWidth - blackKeyWidth / 2}
              y={yStart}
              width={blackKeyWidth}
              height={blackKeyHeight}
              fill={"black"}
              stroke={"black"}
              strokeWidth={1}
            />
          )
        )}
      </Layer>
    </Stage>
  );
};

export default PianoKeyboard;