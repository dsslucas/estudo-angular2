import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

//API. Puxa os trem e tudo mais
//Lembrar de criar um HTTP Client no APP.MODULE.TS

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  //Dados vindo da API
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

  constructor(
    private http: HttpClient
  ) { }

  //Pega os dados da API (HTTP GET). Essa função é específica do TypeScript
  //Observable observa o que está ocorrendo com o HTTP Client. Sempre precisa ter Return
  get apiListAllPokemons(): Observable<any> {

    //Pega tudo da API. Pipe é filtro!
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )

        })
      })
    )
  }

  public apiGetPokemons(url: string): Observable<any> {
    //Pega os resultados e os status do mesmo
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
