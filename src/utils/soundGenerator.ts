export function generateWaveArray(
  sampleRate: number,
  fundamental: number,
  waveSnapshot: (fundamental: number, point: number) => number
): number[] {
  const waveArray = [];
  for (let i = 0; i < sampleRate; i++) {
    waveArray[i] = waveSnapshot(fundamental, (i / sampleRate) * (2 * Math.PI));
  }
  const max = Math.max(...waveArray);
  for (let i = 0; i < sampleRate; i++) {
    waveArray[i] = waveArray[i] / max;
  }

  return waveArray;
}

// phase is snapshot of wave at current point from 0 to 2 * pi
export function sawSnapshot(fundamental: number, point: number): number {
  const upperLimit = 20_000;

  let audioPoint = 0;
  let harmonic = fundamental;

  while (harmonic <= upperLimit) {
    audioPoint += (fundamental / harmonic) * Math.sin(point * harmonic);
    harmonic += fundamental;
  }

  return audioPoint;
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
