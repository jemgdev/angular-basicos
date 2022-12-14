import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Tor', 'Capitan america']
  heroDeleted: string = ''

  deleteHero (): void {
    this.heroDeleted = this.heroes.shift() || ''
  }
}
