import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es: <strong> {{ base }} </strong></h3>

    <button (click)="accum(base)">+ {{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="accum(-base)">- {{ base }}</button>
  `
})
export class CounterComponent {
  title: string = 'Contador App'
  number: number = 10

  base: number = 5

  accum = (value: number) => {
    this.number += value
  }
}