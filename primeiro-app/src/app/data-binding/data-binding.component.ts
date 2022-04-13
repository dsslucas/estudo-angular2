import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  //Para interpolação. Recomendável usar string 
  //nome: string = ''
  public nome = "Lucas Souza"
  public idade = 24

  //Property Bindings, determina algumas funções como disabled e etc
  public checkedDisabled: boolean = false
  public imgSrc: string = "https://1.bp.blogspot.com/-kgxpXeMfVmM/XWhIPB5gsEI/AAAAAAAA2as/6qtQ049HPFQAbKORwMzFykA67zPJWQkHQCLcBGAs/s1600/Scania-142-V8.jpg"
  public imgTitle: string = "Property Binding"

  //Event 
  public position: {x: number, y:number} = {x: 0, y: 0}

  //SEM TIPO: usa ANY

  public alertaInfo(valor: MouseEvent){
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

  constructor() { }

  ngOnInit(): void {
  }

}
