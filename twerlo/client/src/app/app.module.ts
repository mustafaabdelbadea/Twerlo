import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { RankComponent } from './pages/rank/rank.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { RankCardComponent } from './pages/components/rank-card/rank-card.component';
import { ScoreCardComponent } from './pages/components/score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    RankComponent,
    RankCardComponent,
    ScoreCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CheckboxModule,
    AccordionModule,
    RadioButtonModule,
    CardModule,
    ProgressBarModule,
    MessageModule,
    MessagesModule,
    ChartModule,
    ButtonModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
