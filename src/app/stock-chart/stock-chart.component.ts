import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService, HistoricalData } from '../service/chart.service';



@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {



  ngOnInit(): void {
 
    
  }

  historicalData: Observable<HistoricalData[]> = this.chartService.historicalData;
  single: any[];
  multi: any[];

  view: any[] = [800, 360];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Closing Price';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private chartService: ChartService) {
   // this.single = this.chartService.getStaticData();
  }

  public onSelect(event): void {

  }

  public onRefresh(): void {
   // this.single = this.chartService.getStaticData();
  }
}

export class Chart{
  data: any[]
}


