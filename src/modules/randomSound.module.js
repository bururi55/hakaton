import { Module } from '../core/module.js';

export class RandomSoundModule extends Module {
    constructor() {
      super('randomSound', 'Random Sound');
      this.name = 'Random Sound';
    }
  
    trigger() {
      const sounds = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
      ];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      const audio = new Audio(randomSound);
      audio.play();
    }
  }
  
