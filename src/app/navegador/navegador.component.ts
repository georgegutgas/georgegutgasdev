import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-navegador',
  imports: [RouterLink],
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css'
})
export class NavegadorComponent implements AfterViewInit {
  // Referencia al elemento en el DOM
  @ViewChild('offcanvasNavbar') offcanvasElement!: ElementRef;
  private offcanvasInstance: any;

  // Inicializar Bootstrap
  ngAfterViewInit(): void {
    if(this.offcanvasElement) {
      this.offcanvasInstance = new bootstrap.Offcanvas(this.offcanvasElement.nativeElement);
    }
  }

  // Para cerrar el offcanvas
  closeNavbar(): void {
    if(this.offcanvasInstance) {
      this.offcanvasInstance.hide();
    }
  }

}
