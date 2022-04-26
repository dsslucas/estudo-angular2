import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Lista em um endpoint dos estados
  public listComida: Array<{comida: string, preco: string}> = [
    {comida: "Caldão de peixe", preco: "R$ 35,00"},
    {comida: "Tempero da Rê", preco: "R$ 10,00"},
    {comida: "Arroz com bolo", preco: "22,00"}
  ]

  //Validação do formulário e envio
  public submitForm(form: NgForm){
    console.log("Formulário enviado")
    console.log(form.value)
  }

}
