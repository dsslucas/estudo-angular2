import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
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

  it('(Unitário) setDepositar: should transfer carteira from poupanca', () => {
    component.setDeposito('50')
    //fixture.detectChanges()

    expect(component.getCarteira).toEqual(0)
    expect(component.getPoupanca).toEqual(60)


  })
});
