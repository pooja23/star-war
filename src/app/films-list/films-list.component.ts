import { Component, OnInit } from '@angular/core';
import { FilmDetailsModel } from '../models/film-details.model';
import { FilmListModel } from '../models/film-list.model';
import { FilmListService } from '../service/film-list.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  public links!: FilmDetailsModel[];
  public activeLink: number = 0;

  constructor(private filmListService: FilmListService) { }
  
  ngOnInit(): void {
    this.filmListService.getFilmList().subscribe((data : FilmListModel)=> {
      if(data && data['results'].length > 0) {
        this.links = data.results;
        this.filmListService.setSelectedFilmDetails(this.links[this.activeLink]);
      }
    });
  }

  public setFilmDetails(details: any, index:number) {
    this.activeLink = index;
    this.filmListService.setSelectedFilmDetails(details);
  }
}
