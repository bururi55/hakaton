import './styles.css'

import { Menu } from './menu.js';
import { TimerModule } from './modules/timer.module';
import { RandomSoundModule } from './modules/randomSound.module';

const menu = new Menu();
menu.add(new TimerModule());
menu.add(new RandomSoundModule());