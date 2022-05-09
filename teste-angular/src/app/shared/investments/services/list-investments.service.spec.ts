import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';

import {
  HttpClientTestingModule, //Ajuda no mock, parte de http
  HttpTestingController // pega coisas do controlador, coisas específicas
} from '@angular/common/http/testing'

import { HttpClient } from '@angular/common/http';
import { Investments } from '../model/investments';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController;

  //Testes de HTTP
  let httpClient: HttpClient

  //URL de onde está puxando o serviço, ou dados
  const url = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'

  //Array para mock
  const mockList: Array<Investments> = [
    { name: 'Banco 1', value: 100 },
    { name: 'Banco 2', value: 100 },
    { name: 'Banco 3', value: 100 },
    { name: 'Banco 4', value: 100 },
    { name: 'Banco 5', value: 100 },
  ]

  //Mesma coisa do NG On Init
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient)

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ListInvestmentsService);
  });

  //Depois de cada teste
  afterEach(() => {
    httpTestingController.verify() //Verifica a integridade após os testes
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
