import { Menu as CoreMenu } from './core/menu.js';
import { Module } from './core/module.js';

export class Menu extends CoreMenu {
  constructor() {
    super();
    this.menuElement = document.createElement('div');
    this.menuElement.classList.add('context-menu');
    this.menuElement.style.display = 'none';
    document.body.appendChild(this.menuElement);
    this.items = [];

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.open(event.clientX, event.clientY);
    });

    document.addEventListener('click', () => {
      this.close();
    });
  }

  open(x, y) {
    if (this.items.length === 0) return;
    this.menuElement.style.display = 'block';
    this.menuElement.style.left = `${x}px`;
    this.menuElement.style.top = `${y}px`;
  }

  close() {
    this.menuElement.style.display = 'none';
  }

  add(module) {
    if (!(module instanceof Module)) {
      throw new Error('Module must be an instance of Module class');
    }
    const item = document.createElement('div');
    item.classList.add('menu-item');
    item.textContent = module.name;
    item.addEventListener('click', () => {
      module.trigger();
      this.close();
    });
    this.menuElement.appendChild(item);
    this.items.push(module);
  }
}
