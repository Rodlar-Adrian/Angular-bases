
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[]=['spiderman','thor','hulk','iroman','marvel'];
  public heroreBorrado?:string="";
  removeLastHero():void{
   this.heroreBorrado = this.heroNames.pop();
  }





}
