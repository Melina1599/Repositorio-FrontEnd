import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit() {
    return this.datosPortfolio.getData().subscribe(data => {
      this.contact = data.basicInformation;
    })
  }
}
