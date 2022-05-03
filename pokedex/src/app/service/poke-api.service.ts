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

  //Pega os dados da API (HTTP GET). Essa função é específica do TypeScript. MÉTODO!!!
  //Observable observa o que está ocorrendo com o HTTP Client. Sempre precisa ter Return
  get apiListAllPokemons(): Observable<any> {

    //Pega tudo da API. Pipe é filtro!
    return this.http.get<any>(this.url).pipe(

      //Retorna um objeto
      tap(res => res),

      //Dentro do objeto, pega todos os outros objetos
      tap(res => {
        //Fica um array, onde recebe os pokemons. A partir disso, mapeia
        res.results.map((resPokemons: any) => {

          //Cada vez que passa pelo nó de um array, faz uma chamada que recebe a URL.
          //Faz mais um get, dessa vez para pegar os status de cada pokemon
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
