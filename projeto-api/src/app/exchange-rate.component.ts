import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './exchange-rate-service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getLatestRates('sua_app_id_aqui').subscribe(data => {
      console.log(data);
      // Faça algo com os dados aqui
    });
  }

}
