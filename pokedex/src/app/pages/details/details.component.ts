import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  //URL
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  //Mostra o pokemon na página
  public pokemon: any

  //Quando iniciar
  ngOnInit(): void {
    this.getPokemon;
  }

  //Pega os detalhes. Coisa do TypeScript
  get getPokemon() {
    //Pega o ID do Pokemon passado
    const id = this.activatedRoute.snapshot.params['id']

    //Pega os pokemons com outras informações.
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)

    //Nome
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`)



    //Com as duas buscas, dá uma única resposta, sem precisar de dois subscribe()
    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
      }
    )
  }

}
