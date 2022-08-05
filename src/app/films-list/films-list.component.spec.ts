import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmListService } from '../service/film-list.service';
import { FilmListServiceStub } from '../testing/film-list.service.stub';

import { FilmsListComponent } from './films-list.component';

describe('FilmsListComponent', () => {
  let component: FilmsListComponent;
  let fixture: ComponentFixture<FilmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsListComponent ],
      providers: [
        { provide: FilmListService, useClass: FilmListServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
