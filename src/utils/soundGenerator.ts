// point is snapshot of wave at current point from 0 to 2 * pi
export function sawSnapshot(fundamental: number, point: number): number {
  const upperLimit = 20_000;

  let audioPoint = 0;
  let harmonicMultiple = 1;

  while (harmonicMultiple * fundamental <= upperLimit) {
    audioPoint +=
      (1 / harmonicMultiple) * Math.sin(point * fundamental * harmonicMultiple);
    harmonicMultiple++;
  }

  return audioPoint;
}
export function squareSnapshot(fundamental: number, point: number): number {
  const upperLimit = 20_000;

  let audioPoint = 0;
  let harmonicMultiple = 1;
  const coefficient = (harmonicMultiple: number) => 2 * harmonicMultiple - 1;

  while (fundamental * coefficient(harmonicMultiple) <= upperLimit) {
    audioPoint +=
      (1 / coefficient(harmonicMultiple)) *
      Math.sin(point * fundamental * coefficient(harmonicMultiple));
    harmonicMultiple++;
  }

  return audioPoint;
}

export function generateWaveArray(
  sampleRate: number,
  fundamental: number,
  waveSnapshot: (fundamental: number, point: number) => number
): number[] {
  const waveArray = [];
  for (let i = 0; i < sampleRate; i++) {
    waveArray[i] = waveSnapshot(
      fundamental,
      (i / sampleRate) * ((2 * Math.PI) / 32.7)
    );
  }
  const max = Math.max(...waveArray);
  for (let i = 0; i < sampleRate; i++) {
    waveArray[i] = waveArray[i] / max;
  }

  return waveArray;
}

export function playWaveform(wavePoints: number[]) {
  const audioContext = new AudioContext();
  const audioBuffer = audioContext.createBuffer(
    1,
    wavePoints.length,
    audioContext.sampleRate
  );
  const channelData = audioBuffer.getChannelData(0);
  for (let i = 0; i < wavePoints.length; i++) {
    channelData[i] = wavePoints[i];
  }
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
}
