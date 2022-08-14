import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { RankComponent } from './pages/rank/rank.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    RadioButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
