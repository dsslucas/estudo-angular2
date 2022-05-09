import { Component, OnInit } from '@angular/core';

import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    //Chama o HTTP Client
    private listInvestmentsService: ListInvestmentsService
  ) { }

  ngOnInit(): void {
    //Chama a função GET
    this.listInvestmentsService.list().subscribe(
      res => console.log(res)
    )
  }

  //Popular a lista, vinda de uma interface
  public investments: Array<Investments> = [
    {
      name: "Itaú",
      value: 400
    },
    {
      name: "Caixa Econômica Federal",
      value: 380
    },
    {
      name: "Nu Bank",
      value: 100
    },
    {
      name: "Inter",
      value: 400
    },
  ]

}
