import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmListService } from '../service/film-list.service';
import { FilmListServiceStub } from '../testing/film-list.service.stub';

import { FilmsCharacterListComponent } from './films-character-list.component';

describe('FilmsCharacterListComponent', () => {
  let component: FilmsCharacterListComponent;
  let fixture: ComponentFixture<FilmsCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsCharacterListComponent ],
      providers: [
        { provide: FilmListService, useClass: FilmListServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
