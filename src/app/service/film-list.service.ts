import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { ModelFactory, Model } from '@angular-extensions/model';

@Injectable()
export class FilmListService {
    public selectedfilmDetails$: Observable<Object>;
    private selectedfilmDetailsModel: Model<Object>;

    public characterList$: Observable<Array<Object>>;
    private characterListModel: Model<Array<Object>>;

    public showLoader$: Observable<Boolean>;
    private showLoaderModel: Model<Boolean>;

    constructor(
        private http: HttpClient,
        private modelFactory: ModelFactory<any>,
    ) { 
        this.selectedfilmDetailsModel = this.modelFactory.create({});
        this.selectedfilmDetails$ = this.selectedfilmDetailsModel.data$;

        this.characterListModel = this.modelFactory.create([]);
        this.characterList$ = this.characterListModel.data$;

        this.showLoaderModel = this.modelFactory.create(true);
        this.showLoader$ = this.showLoaderModel.data$;
      }

    public getFilmList() {
        return this.http.get('http://swapi.dev/api/films');
    }

    public setSelectedFilmDetails(details: any) {
        this.showLoaderModel.set(true);
        this.selectedfilmDetailsModel.set(details);
        this.getCharacterList(details.characters);
    }

    private getCharacterList(charactersList: string[]) {
        forkJoin(this.returnCharacterListToReturn(charactersList)).subscribe( (result: any) => {
            this.characterListModel.set(result);
            this.showLoaderModel.set(false);
        });
    }

    private returnCharacterListToReturn(charactersList: string[]) {
        let characterDetails:any = [];
        charactersList.forEach((element: string) => {
            characterDetails.push(this.http.get(element));
        });
        return characterDetails;
    }
}