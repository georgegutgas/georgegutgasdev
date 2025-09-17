import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { NavegadorComponent } from './navegador/navegador.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalComponent, NavegadorComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'georgegutgas';
}
