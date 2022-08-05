import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { FilmsCharacterListComponent } from './films-character-list/films-character-list.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmListService } from './service/film-list.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmsCharacterListComponent,
    FilmsDetailsComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    AgGridModule,
    MatProgressSpinnerModule
  ],
  providers: [ FilmListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
