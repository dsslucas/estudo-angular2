import { ComponentFixture, TestBed } from '@angular/core/testing';

//É importante colocar modelos e interfaces para testes, para que não haja avisos
import { ListComponent } from '../investments/components/list/list.component';

import { BankingComponent } from './banking.component';

import {
  HttpClientTestingModule, //Ajuda no mock, parte de http
  HttpTestingController // pega coisas do controlador, coisas específicas
} from '@angular/common/http/testing'

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(Unitário) getPoupanca(): should poupança have 10', () => {
    expect(component.getPoupanca).toEqual(10);
  })

  it('(Unitário) getCarteira(): should poupança have 50', () => {
    expect(component.getCarteira).toEqual(50);
  })

  it('(Unitário) should transfer poupanca from carteira', () => {
    component.setSacar('10')
    //fixture.detectChanges() //Detecta mudanças, não necessário para unitários
    expect(component.getPoupanca).toEqual(0)
    expect(component.getCarteira).toEqual(60)
  })

  //Teste nos IFs
  it('(Unidade) setSacar(): should transfer poupanca dont have string (isNaN) oR poupanca < value', () => {
    expect(component.setSacar('string')).not.toBeTruthy() //isNaN
    expect(component.setSacar('100')).not.toBeTruthy; //Valor acima

    expect(component.getPoupanca).toEqual(10)
    expect(component.getCarteira).toEqual(50)

  })

  it('(Unitário) setDepositar: should transfer carteira from poupanca', () => {
    component.setDeposito('50')
    //fixture.detectChanges()

    expect(component.getCarteira).toEqual(0)
    expect(component.getPoupanca).toEqual(60)

  })

  //Teste nos IFs
  it('(Unidade) setDeposito(): should transfer carteira dont have string (isNaN) oR CARTEIRA < value', () => {
    expect(component.setDeposito('string')).not.toBeTruthy() //isNaN
    expect(component.setDeposito('100')).not.toBeTruthy; //Valor acima

    expect(component.getPoupanca).toEqual(10)
    expect(component.getCarteira).toEqual(50)

  })

  // TESTES DE TELA - TESTES DE TELA - TESTES DE TELA - TESTES DE TELA - TESTES DE TELA

  it('(iNTERFACE) setDeposito(): should transfer carteira to Poupanca', () => {
    let el = fixture.debugElement.nativeElement
    el.querySelector('#input-depositar').value = '10'
    el.querySelector('#depositar').click();

    //Detecta alterações
    fixture.detectChanges()

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20')

    //expect(component.getPoupanca).toEqual(20)
    //expect(component.getCarteira).toEqual(40)

  })

  it('(iNTERFACE) setSacar(): should transfer Poupanca to Carteira', () => {
    let el = fixture.debugElement.nativeElement
    el.querySelector('#input-sacar').value = '10'
    el.querySelector('#sacar').click();

    //Detecta alterações
    fixture.detectChanges()

    expect(el.querySelector('#get-carteira').textContent).toEqual('60')

    //expect(component.getPoupanca).toEqual(20)
    //expect(component.getCarteira).toEqual(40)

  })

});


