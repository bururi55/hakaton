import { Module } from '../core/module.js';

export class TimerModule extends Module {
    constructor() {
      super('timer', 'Timer');
      this.name = 'Timer';
    }
  
    trigger() {
      let time = prompt('Enter time in seconds:');
      if (time) {
        const timerElement = document.createElement('div');
        timerElement.classList.add('timer');
        timerElement.textContent = `Time left: ${time} seconds`;
        document.body.append(timerElement);
  
        const interval = setInterval(() => {
          time--;
          timerElement.textContent = `Time left: ${time} seconds`;
          if (time <= 0) {
            clearInterval(interval);
            alert('Time is up!');
            document.body.remove(timerElement);
          }
        }, 1000);
      }
    }
  }
  
