import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmListService } from '../service/film-list.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit, OnDestroy {

  public details: any;
  private detailSub: any;
  constructor(private filmListService: FilmListService) { }

  ngOnInit(): void {
    this.detailSub = this.filmListService.selectedfilmDetails$.subscribe(data => {
      this.details = data;
    });
  }

  ngOnDestroy() {
    this.detailSub.unsubscribe();
  }

}
