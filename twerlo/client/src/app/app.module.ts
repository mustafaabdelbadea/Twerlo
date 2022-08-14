import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { RankComponent } from './pages/rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    RankComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
