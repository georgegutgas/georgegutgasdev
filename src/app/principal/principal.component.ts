import { Component } from '@angular/core';
import { NavegadorComponent } from "../navegador/navegador.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [NavegadorComponent, RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
