import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolios: Portfolio[] = [
    {
      name: 'PlatziConf',
      urlImg: 'img/platziconf.png',
      urlCode: 'https://github.com/georgegutgas/platzi-bootstarp-2022',
      urlPage: 'https://georgegutgas.github.io/platzi-bootstarp-2022/',
      description: 'Pagina web donde se pone en práctica lo aprendido en el curso de Platzi Bootstrap creando una pagina de conferencias con un diseño bonito',
      tecnologies: []
    },
    {
      name: '100tifi.co',
      urlImg: 'img/100tifico.png',
      urlCode: 'https://github.com/georgegutgas/curso-spa',
      urlPage: 'https://georgegutgas.github.io/curso-spa/',
      description: 'Pagina web donde se pone en práctica lo aprendido en el curso de Platzi Bootstrap creando una pagina de conferencias con un diseño bonito',
      tecnologies: []
    },
    {
      name: 'Bienes Raices',
      urlImg: 'img/bienesraices.png',
      urlCode: '',
      urlPage: 'https://bienesraices-ggg.netlify.app/',
      description: 'Pagina web donde se pone en práctica lo aprendido en el curso de Platzi Bootstrap creando una pagina de conferencias con un diseño bonito',
      tecnologies: []
    },
    {
      name: 'Blog DeCafe',
      urlImg: 'img/blogdecafe.png',
      urlCode: 'https://github.com/georgegutgas/platzi-bootstarp-2022',
      urlPage: 'https://blogcafe-ggg.netlify.app/',
      description: 'Pagina web donde se pone en práctica lo aprendido en el curso de Platzi Bootstrap creando una pagina de conferencias con un diseño bonito',
      tecnologies: []
    },
    {
      name: 'Full Stack',
      urlImg: 'img/fullstack.png',
      urlCode: 'https://github.com/georgegutgas/platzi-bootstarp-2022',
      urlPage: 'https://fullstack-ggg.netlify.app/',
      description: 'Pagina web donde se pone en práctica lo aprendido en el curso de Platzi Bootstrap creando una pagina de conferencias con un diseño bonito',
      tecnologies: []
    },
    {
      name: 'Presupuestos',
      urlImg: 'img/presupuestos.png',
      urlCode: 'https://github.com/georgegutgas/platzi-bootstarp-2022',
      urlPage: 'https://presupuestos-ggg.netlify.app/',
      description: 'Pagina web donde se pone en práctica lo aprendido en el curso de Platzi Bootstrap creando una pagina de conferencias con un diseño bonito',
      tecnologies: []
    }
  ];

  constructor() { }

    obtenerPortfolios() {
    return this.portfolios;
  }
}
