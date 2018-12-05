import { Component } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataGraph = [
    {
      'name': 'value',
      'series': [
        {
          'value': 0,
          'name': 1
        },
        {
          'value': 980,
          'name': 2
        },
        {
          'value': 980.3,
          'name': 3
        },
        {
          'value': 980.4,
          'name': 4
        },
        {
          'value': 980.6,
          'name': 5
        }
        ,
        {
          'value': 980.6,
          'name': 6
        }
        ,
        {
          'value': 980.6,
          'name': 7
        }
        ,
        {
          'value': 980.6,
          'name': 8
        }
        ,
        {
          'value': 980.6,
          'name': 9
        }
        ,
        {
          'value': 980.6,
          'name': 10
        }
        ,
        {
          'value': 980.6,
          'name': 11
        }
        ,
        {
          'value': 980.6,
          'name': 12
        }
      ]
    }
  ];

  colorScheme = {domain: ['#007AB3']};
  data: any[] = this.dataGraph;
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = 'Time';
  yAxisLabel = 'Amount';
  autoScale = true;
  timeline = false;
  yScaleMax = 1500; // should be dynamic
  xScaleMax = 15; // should be dynamic
  yScaleMin = 0;
  xScaleMin = 1;
  showGridLines = true;
  curve = shape.curveLinear;

}
