import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  developerList: any;
  qaList: any;
  experienceList: any;

  lista: any;

  constructor(private datosPortfolio: PortfolioService) { }

  getPortfolio() {
    return this.datosPortfolio.getData().subscribe(data => {
      this.developerList = data.developer;
    });
  }

  getQA() {
    return this.datosPortfolio.getData().subscribe(data => {
      this.qaList = data.testing;
    });
  }

  getExperience() {
    return this.datosPortfolio.getData().subscribe(data => {
      this.experienceList = data.workExperience;
    });
  }

  ngOnInit() {
    return this.getPortfolio(), this.getQA(), this.getExperience();
  }

}
