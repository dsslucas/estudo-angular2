import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(
    //Cadastrar o form
    private formBuilder: FormBuilder,
    private authService: AuthService //Conexão com o backend
  ) { }

  public formAuth: FormGroup = this.formBuilder.group({
      //Grupos de objetos, que validam os campos
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  })

  //Inicia vazia, mas pode ser string
  public msgError!: string

  public submitForm(){
    //Se for válido
    if(this.formAuth.valid){
      //Outra funcionalidade
      this.authService.sign({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password
      }).subscribe({
        next: (res) => res,
        error: (e) => this.msgError = e
      })
    }
  }


  ngOnInit(): void {
  }

}
