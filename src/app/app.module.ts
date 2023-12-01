import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component";
import { counterModule } from "./counter/counter.module";
import { heroeModule } from "./heroes/components/heroe.module";

@NgModule({
 declarations:[
AppComponent,
 ],

imports:[
  BrowserModule,
  counterModule,
  heroeModule,
],
providers:[],
bootstrap:[AppComponent],
})

export class AppModule{}
