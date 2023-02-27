import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit() {
    this.datosPortfolio.getData().subscribe(data => {
      this.myPortfolio = data;
    })
  }
}
