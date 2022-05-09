import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {
  HttpClientTestingModule, //Ajuda no mock, parte de http
  HttpTestingController // pega coisas do controlador, coisas específicas
} from '@angular/common/http/testing'
import { Investments } from '../../model/investments';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { of } from 'rxjs';

//IMPORTANTE!
// toEqual: usado para verificar se o valor é EXATO
// toContain: usa mais para HTML
// toBe: verifica mais os valores numéricos, abrindo espaço para strings e etc

//Array para mock
const mockList: Array<Investments> = MOCK_LIST

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  //Necessário para o Mock e Spy On
  let service: ListInvestmentsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Teste da lista populada
  it('(Unitário) lista de investimentos populada', () => {
    let investiments = component.investments;
    /*
    expect(investiments.length).toBe(3)
    expect(investiments[0].name).toContain('Banco Inter')
    */

    //Com Mock
    //Espiona métodos dentro da função, usando dois parâmetros  
    spyOn(service, 'list').and.returnValue(of(mockList))

    //Quando iniciar o componente, SpyOn vai espionar isso...
    component.ngOnInit()

    //Detecta mudanças para evitar erros
    fixture.detectChanges()

    //Espera que tenha feito suas ações de SpyOn
    expect(service.list).toHaveBeenCalledWith()

    expect(component.investments.length).toBe(5)

    expect(component.investments[0].name).toEqual('Banco 1')
    expect(component.investments[4].name).toEqual('Banco 5')

    expect(component.investments[0].value).toEqual(100)
    expect(component.investments[4].value).toEqual(100)
  })

  //Teste de interface
  it('(Interface) shoud list investments', () => {
    //expect(investments.length).toBe(3)

    //Falso positivo, fique alerta. Neste caso, é bom retornar todos os valores
    //expect(investments[0].textContent).toContain("Banco Inter")

    //Versão correta. Trim() após o textContent remove os espaços
    //expect(investments[0].textContent).toEqual("Banco Inter | 400")


    // ********* COM MOCK ***************
    //Espiona métodos dentro da função, usando dois parâmetros  
    spyOn(service, 'list').and.returnValue(of(mockList))

    //Quando iniciar o componente, SpyOn vai espionar isso...
    component.ngOnInit()

    //Detecta mudanças para evitar erros
    fixture.detectChanges()

    //Chamando o elemento nativo e pega pela classe
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    //Espera que tenha feito suas ações de SpyOn
    expect(service.list).toHaveBeenCalledWith()

    //Testes
    expect(investments.length).toBe(5)
    expect(investments[0].textContent.trim()).toEqual("Banco 1 | 100")

  })

});


