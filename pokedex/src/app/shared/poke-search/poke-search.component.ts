import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Quando digitar algo, ele emite algo. É um evento!
  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();

  //Sempre que fizer algo, vai enviar um valor
  public search(value: string){
    this.emmitSearch.emit(value)
  }

}
