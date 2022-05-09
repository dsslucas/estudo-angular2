import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';

import {
  HttpClientTestingModule, //Ajuda no mock, parte de http
  HttpTestingController // pega coisas do controlador, coisas específicas
} from '@angular/common/http/testing'

import { HttpClient } from '@angular/common/http';
import { Investments } from '../model/investments';
import { MOCK_LIST } from './list-investments.mock';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController;

  //Testes de HTTP
  let httpClient: HttpClient

  //URL de onde está puxando o serviço, ou dados
  const url = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'

  //Array para mock
  const mockList:  Array<Investments> = MOCK_LIST

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


  it("(Unitário) Should be list all investments", (done) => {
    service.list().subscribe(
      (res: Array<Investments>) => {
        expect(res[0].name).toEqual('Banco 1')
        expect(res[4].name).toEqual('Banco 5')
        done() //Trava o Subscribe. Se recebeu os dados, ele faz parar!
      }
    )
    
    //done() //Se chegamos aqui, encerramos o teste unitário

    //Espera que a URL seja igual
    const req = httpTestingController.expectOne(url)

    //O retorno tem que ser a Mock List. O que vem da URL tem que ser trocado pelo o que foi estabelecido.
    req.flush(mockList)

    expect(req.request.method).toEqual('GET')
  })


});
