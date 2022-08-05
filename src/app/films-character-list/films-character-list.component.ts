import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FilmListService } from '../service/film-list.service';

@Component({
  selector: 'app-films-character-list',
  templateUrl: './films-character-list.component.html',
  styleUrls: ['./films-character-list.component.scss']
})
export class FilmsCharacterListComponent implements OnInit, OnDestroy {

  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'height' },
    { field: 'birth_year' },
    { field: 'gender' }
];

  public rowData: any[] = [];
  public showLoader: Boolean = true;

  private listSubs: any;
  private showLoaderSubs: any;

  constructor(private filmListService: FilmListService) { }

  ngOnInit(): void {
    this.listSubs = this.filmListService.characterList$.subscribe( data => {
      this.rowData = data;
    });

    this.showLoaderSubs = this.filmListService.showLoader$.subscribe( displayLoader => {
      this.showLoader = displayLoader;
    });
  }

  ngOnDestroy() {
    this.listSubs.unsubscribe();
    this.showLoaderSubs.unsubscribe();
  }
}
