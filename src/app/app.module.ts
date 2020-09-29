import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { Main } from './app';
import { Navbar } from './navbar';
import { Table } from './table';
import { Footer } from './footer';
import { Chart } from './chart';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    GoogleChartsModule,
  ],
  declarations: [Main, Navbar, Table, Footer, Chart],
  bootstrap: [Main],
})
export class AppModule {}
