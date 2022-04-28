import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      res => console.log(res)
    )

    //Péga os parâmetros a partir das interrogações 
    // nome=123&username=scnaia
    this.activateRoute.queryParams.subscribe(
      res => console.log(res)
    )

    /*
    //Faz o redirecionamento para alguma página depois de um tempo estabelecido
    setInterval( () => {
      //this.router.navigate(['404']); //Clique de link, sem reload, para navegações internas
      this.router.navigateByUrl('404'); //Reload da página
    }, 5000)

    */
  }

}
