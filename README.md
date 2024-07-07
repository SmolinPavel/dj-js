# browser-dj-js

`browser-dj-js` is a simple JavaScript/TypeScript library to play musical notes and melodies using the Web Audio API. This library provides functions to play individual notes and sequences of notes (melodies).

## Installation

You can install the package using `pnpm`, `npm`, or `yarn`.

### Using pnpm

```sh
pnpm add browser-dj-js
```

### Using npm

```sh
npm add browser-dj-js
```

### Using yarn

```sh
yarn add browser-dj-js
```

## Usage

### Importing the Functions

You can import the playNote and playMelody functions in your project:
```typescript
import { playNote, playMelody } from 'browser-dj-js';
```

### Playing a Single Note

To play a single note, use the playNote function. You need to specify the frequency of the note and the duration in seconds.

```typescript
playNote({
    frequency: 440, // Frequency in Hz (e.g., 440 Hz for A4)
    duration: 1     // Duration in seconds
});
```

### Playing a Melody

To play a melody, use the playMelody function. You need to pass an array of notes, each with a frequency and duration.

```typescript
const melody = [
    { frequency: 440, duration: 1 },   // A4
    { frequency: 493.88, duration: 1 }, // B4
    { frequency: 523.25, duration: 1 }, // C5
    { frequency: 440, duration: 1 },    // A4
];

playMelody(melody);
```

## API

`playNote`

Plays a single note with a given frequency and duration.

#### Parameters
- `note: { frequency: number, duration: number }` - The note to play.
   - `frequency` - Frequency of the note in Hz.
   - `duration` - Duration of the note in seconds.


`playMelody`

Plays a sequence of notes.

#### Parameters
- `melody: { frequency: number, duration: number }[]` - Array of notes to play.
  - Each note has:
     - `frequency` - Frequency of the note in Hz.
     - `duration` - Duration of the note in seconds.

## Example

Here is a complete example that demonstrates how to use playNote and playMelody:

```typescript 
import { playNote, playMelody } from 'browser-dj-js';

// Play a single note (A4 for 1 second)
playNote({
    frequency: 440,
    duration: 1
});

// Play a melody
const melody = [
    { frequency: 440, duration: 1 },   // A4
    { frequency: 493.88, duration: 1 }, // B4
    { frequency: 523.25, duration: 1 }, // C5
    { frequency: 440, duration: 1 },    // A4
];

playMelody(melody);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.

## License

This project is licensed under the MIT License

```perl

### Summary

This `README.md` provides a clear overview of the `browser-dj-js` package, including installation instructions, usage examples, and API documentation. This should help users understand how to integrate and use the `playNote` and `playMelody` functions in their projects.

```