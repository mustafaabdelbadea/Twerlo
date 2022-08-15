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
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    RankComponent
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
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
