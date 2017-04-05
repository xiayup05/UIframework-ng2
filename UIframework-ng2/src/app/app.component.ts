import { Component } from '@angular/core';

export class Hero{
  id: number;
  iconname: string;
  name: string;
  path: string;
}

const HEROES: Hero[] = [
  { id: 1, iconname: 'icon-menu', name: 'KingT UI框架' , path: 'zj' },
  { id: 2, iconname: 'icon-user', name: 'HTML 组件', path: 'kj' },
  { id: 3, iconname: 'icon-line', name: 'JavaScript 插件', path: 'cj' },
  { id: 4, iconname: 'icon-ye', name: '表格布局规范', path: 'bg' },
  { id: 5, iconname: 'icon-mail', name: '基本交互规范', path: 'jb' }
];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
