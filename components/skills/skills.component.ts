import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor( private datosPortfolio: PortfolioService) {}

  ngOnInit() {
    return this.datosPortfolio.getData().subscribe(data => {
      this.skills = data.skill;
    });
  }
}
