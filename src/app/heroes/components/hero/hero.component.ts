
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string="Adrian";
  public age:  number=32;


  public get capitalizedName():string {
    return  this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }


  ChangeHero():void{
    this.name = "spiderman";
  }

  changeAge():void{
this.age = 25;
  }

  resetForm():void{

    this.name = 'Adrian';
    this.age = 25;
  }
}
