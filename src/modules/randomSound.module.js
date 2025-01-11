import { Module } from '../core/module.js';
import sound1 from '../assets/sound1.mp3';
import sound2 from '../assets/sound2.mp3';
import sound3 from '../assets/sound3.mp3';

export class RandomSoundModule extends Module {
    constructor() {
      super('randomSound', 'Random Sound');
      this.name = 'Random Sound';
    }
  
    trigger() {
      const sounds = [sound1, sound2, sound3];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      const audio = new Audio(randomSound);
      audio.play().catch(error => {
        console.error('Failed to play audio:', error);
    });
  }
}
