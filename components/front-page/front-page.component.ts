import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  data: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit() {
    this.datosPortfolio.getData().subscribe(data => {
      this.data = data;
    })
  }
}
