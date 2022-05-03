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

  ngOnInit(): void {
    //Precisa instanciar (carrega aí pra mim?)
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => console.log(res)
    )
  }

}
