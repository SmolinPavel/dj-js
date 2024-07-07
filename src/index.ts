import { notes } from './notes';
import { NoteFrequency } from './types';

function calculateFrequency(keyNumber: number): number {
  return 16.35 * Math.pow(2, (keyNumber - 1) / 12);
}

export function getNoteFrequencies(): NoteFrequency[] {
  const frequencies: NoteFrequency[] = [];

  for (let i = 0; i < notes.length; i++) {
    const frequency = calculateFrequency(i + 1);
    frequencies.push({
      note: notes[i],
      frequency: parseFloat(frequency.toFixed(2)),
    });
  }

  return frequencies;
}

export const noteFrequencies = getNoteFrequencies();

export async function playNote(
  audioContext: AudioContext,
  frequency: number,
  duration: number,
) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);

  return new Promise<void>((resolve) => {
    oscillator.onended = () => resolve();
  });
}

export async function playMelody(
  audioContext: AudioContext,
  melody: { note: string; duration: number }[],
) {
  for (const { note, duration } of melody) {
    const noteFreq = noteFrequencies.find((nf) => nf.note === note)?.frequency;
    if (noteFreq) {
      await playNote(audioContext, noteFreq, duration);
    } else {
      await new Promise((resolve) => setTimeout(resolve, duration * 1000));
    }
  }
}
