import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {
  HttpClientTestingModule, //Ajuda no mock, parte de http
  HttpTestingController // pega coisas do controlador, coisas específicas
} from '@angular/common/http/testing'

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Teste da lista populada
  it('(Unitário) lista de investimentos populada', () => {
    let investiments = component.investments;
    expect(investiments.length).toBe(3)
    expect(investiments[0].name).toContain('Banco Inter')
  })

  //Teste de interface
  it('(Interface) shoud list investments', () => {
    //Chamando o elemento nativo e pega pela classe
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investments.length).toBe(3)

    //Falso positivo, fique alerta. Neste caso, é bom retornar todos os valores
    //expect(investments[0].textContent).toContain("Banco Inter")

    //Versão correta. Trim() após o textContent remove os espaços
    expect(investments[0].textContent).toEqual("Banco Inter | 400")

  })
});


