import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone:false,
  template: `
  <h3>Counter:{{ counter }}</h3>

<button (click)="incrementarValor(+1)">+1</button>
<button (click)="resetValor()">Reset</button>
<button (click)="incrementarValor(-1)">-1</button>

  `,
})

export class CounterComponent{
  public counter:number=10;

  incrementarValor(valor:number):void{
    this.counter += valor;
    }


  resetValor():void{
     this.counter = 10;
  }
}
