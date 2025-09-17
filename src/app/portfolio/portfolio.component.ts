import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolios = [
    {
      name: 'PlatziConf',
      urlImg: 'img/platziconf.png'
    },
    {
      name: '100tifi.co',
      urlImg: 'img/100tifico.png'
    },
    {
      name: 'Bienes Raices',
      urlImg: 'img/bienesraices.png'
    },
    {
      name: 'Blog DeCafe',
      urlImg: 'img/blogdecafe.png'
    },
    {
      name: 'Full Stack',
      urlImg: 'img/fullstack.png'
    },
    {
      name: 'Presupuestos',
      urlImg: 'img/presupuestos.png'
    }
  ];
}
