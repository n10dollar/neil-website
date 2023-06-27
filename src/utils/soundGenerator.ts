export function generateWaveArray(
  sampleRate: number,
  fundamental: number,
  waveSnapshot: (fundamental: number, point: number) => number
): number[] {
  const waveArray = [];
  for (let i = 0; i < sampleRate; i++) {
    waveArray[i] = waveSnapshot(fundamental, (i / sampleRate) * (2 * Math.PI));
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
