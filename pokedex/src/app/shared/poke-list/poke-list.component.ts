import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  public getAllPokemons: any;
  private setAllPokemons: any;

  //Previne erros
  public apiError: boolean = false

  ngOnInit(): void {
    //Precisa instanciar (carrega aí pra mim?)
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        
        //Vai receber apenas os resultados da API
        this.setAllPokemons = res.results
        //console.log(this.getAllPokemons)

        this.getAllPokemons = this.setAllPokemons
      },
      error => {
        this.apiError = true
      }
    )
  }

  //Resgata o valor do output na barra de pesquisa
  public getSearch(value: string){
    //Filtra os pokemons
    const filter = this.setAllPokemons.filter( (res: any) => {
      //Index Of pega os primeiros resultados informados
      return !res.name.indexOf(value.toLowerCase())
    });

    this.getAllPokemons = filter;
  } 

}
