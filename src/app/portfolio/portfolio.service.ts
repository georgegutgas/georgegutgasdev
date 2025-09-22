import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolios: Portfolio[] = [
    {
      name: 'PlatziConf',
      shortDesc: 'Conference project',
      description: 'A website where you practice what you learned in the Platzi Bootstrap course by creating a conference page with a beautiful design.',
      urlImg: 'img/platziconf.png',
      urlCode: 'https://github.com/georgegutgas/platzi-bootstarp-2022',
      urlPage: 'https://georgegutgas.github.io/platzi-bootstarp-2022/',
      tecnologies: [
        {name: 'HTML', img: ''},
        {name: 'CSS', img: ''},
        {name: 'JavaScript', img: ''},
      ]
    },
    {
      name: '100tifi.co',
      shortDesc: 'Wiki project',
      description: 'SPA website where I practiced how Single Page Applications work with routes, templates, styles, etc.',
      urlImg: 'img/100tifico.png',
      urlCode: 'https://github.com/georgegutgas/curso-spa',
      urlPage: 'https://georgegutgas.github.io/curso-spa/',
      tecnologies: [
        {name: 'HTML', img: ''},
        {name: 'CSS', img: ''},
        {name: 'JavaScript', img: ''},
      ]
    },
    {
      name: 'Bienes Raices',
      shortDesc: 'Real estate project',
      description: 'A very attractive single-page application about real estate designed with CSS. It contains several sections you can navigate and even submit a form to request more information.',
      urlImg: 'img/bienesraices.png',
      urlCode: 'https://github.com/georgegutgas/bienesraices',
      urlPage: 'https://bienesraices-ggg.netlify.app/',
      tecnologies: [
        {name: 'HTML', img: ''},
        {name: 'CSS', img: ''}
      ]
    },
    {
      name: 'Blog DeCafe',
      shortDesc: 'Blog project',
      description: 'A very attractive single-page application about a coffee blog designed with CSS. It contains several sections you can navigate and even submit a form to request more information.',
      urlImg: 'img/blogdecafe.png',
      urlCode: 'https://github.com/georgegutgas/blogcafe',
      urlPage: 'https://blogcafe-ggg.netlify.app/',
      tecnologies: [
        {name: 'HTML', img: ''},
        {name: 'CSS', img: ''}
      ]
    },
    {
      name: 'Full Stack',
      shortDesc: 'Responsive development project with media queries',
      description: 'A responsive website from a full-stack developer that uses responsive development with media queries and creates a striking design. Although the navbar has several sections, only the home page works.',
      urlImg: 'img/fullstack.png',
      urlCode: 'https://github.com/georgegutgas/fullstack',
      urlPage: 'https://fullstack-ggg.netlify.app/',
      tecnologies: [
        {name: 'HTML', img: ''},
        {name: 'CSS', img: ''}
      ]
    },
    {
      name: 'Presupuestos',
      shortDesc: 'Budget angular project',
      description: "A website created with Angular that implements many of Angular's features, such as services, models, and data passing through input and output. Data is also taken from TypeScript to make the page dynamic, simulating a database connection.",
      urlImg: 'img/presupuestos.png',
      urlCode: 'https://github.com/georgegutgas/app-presupuestos',
      urlPage: 'https://presupuestos-ggg.netlify.app/',
      tecnologies: [
        {name: 'HTML', img: ''},
        {name: 'CSS', img: ''},
        {name: 'Bootstrap', img: ''},
        {name: 'Angular', img: ''},
        {name: 'TypeScript', img: ''},
      ]
    }
  ];

  constructor() { }

  obtenerPortfolios() {
    return this.portfolios;
  }

  obtenerPortfolioDetalle(name: string) {
     const portfolio = this.portfolios.find((portfolio) => portfolio.name === name);
    // console.log(portfolio);
    return portfolio;
  }
}
