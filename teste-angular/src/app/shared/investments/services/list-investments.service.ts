import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investments } from '../model/investments';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ListInvestmentsService {

  constructor(
    private http: HttpClient //Importante para dados que vem de API
  ) { }

  private url: string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'

    public list(): Observable<Investments>{
      //Está sendo tipado pelo Observable e pelo Get
      return this.http.get<Investments>(this.url).pipe( 
        map(
          res => res
        )
      )

    }
}
