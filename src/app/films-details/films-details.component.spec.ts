import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmListService } from '../service/film-list.service';
import { FilmListServiceStub } from '../testing/film-list.service.stub';

import { FilmsDetailsComponent } from './films-details.component';

describe('FilmsDetailsComponent', () => {
  let component: FilmsDetailsComponent;
  let fixture: ComponentFixture<FilmsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsDetailsComponent ],
      providers: [
        { provide: FilmListService, useClass: FilmListServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
