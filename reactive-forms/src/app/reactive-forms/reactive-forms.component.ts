import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  //Cadastro de formulário
  public cadastroForm: FormGroup = this.formBuilder.group({
    
    //Required é o básico: só envia o formulário se estiver preenchido
    firstName: ['', Validators.required], //Validators é uma propriedade do Angular Forms

    lastName: ['', [Validators.required, Validators.minLength(5)]] //Necessário array por ter mais de um validator

  }) 

  public submitForm(){

    //Só roda se for válido
    if(this.cadastroForm.valid){
      console.log("Formulário enviado")
      console.log(this.cadastroForm)
    }
  }
}
