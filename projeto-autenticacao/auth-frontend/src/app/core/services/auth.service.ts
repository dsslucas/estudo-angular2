import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    //Lida com métodos HTTP
    private http: HttpClient,
    private router: Router
  ) { }

  //URL da requisição (backend)
  private url: string = 'http://localhost:3000'

  //Para logar
  public sign(payload: { email: string, password: string }): Observable<any> {

    //<{}> indica retorno
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((data) => {
        //Caso seja sucesso

        //Previne erros. Sempre que uma pessoa logar, remove as chaves existentes anteriormente para que depois uma nova possa ser criada
        localStorage.removeItem('access_token')

        localStorage.setItem('access_token', data.token)

        //Avança para a página seguinte
        return this.router.navigate(['admin'])
      }),
      catchError((err) => {
        //Validação necessária para checar se o servidor está funcionando
        if (err.error.message) return throwError(() => err.error.message)

        return throwError(() => "Não estamos conseguindo validar os dados. Tente novamente mais tarde.")
      })
    )
  }

  //Para sair
  public logout() {
    localStorage.removeItem('access_token')

    //Volta para a página principal
    return this.router.navigate([''])
  }

  //Verifica se está logado, para que as rotas trabalhem
  public isAuthenticated() {
    const token = localStorage.getItem("access_token")

    //O token existe? Caso a resposta seja não, no Auth Guard retorna falso
    if(!token) return false

    //Vale lembrar que é necessário adicionar um CanActivateChild no Routing principal

    //Serviço junto ao JWT, baixado via NPM
    const jwtHelper = new JwtHelperService()

    //Se a condição não tiver token expirado, retorna true para o Auth Guard
    return !jwtHelper.isTokenExpired(token)
  }
}
