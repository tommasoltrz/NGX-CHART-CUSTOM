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
      'name': '€',
      'series': [
        {
          'value': 0,
          'name': new Date('2018-09-1')
        },
        {
          'value': 980,
          'name': new Date('2018-09-2')
        },
        {
          'value': 980.3,
          'name': new Date('2018-09-3')
        },
        {
          'value': 980.4,
          'name': new Date('2018-09-4')
        },
        {
          'value': 980.6,
          'name': new Date('2018-09-5')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-6')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-7')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-8')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-9')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-10')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-11')
        }
        ,
        {
          'value': 980.6,
          'name': new Date('2018-09-12')
        }
      ]
    }
  ];

  colorScheme = {domain: ['#007AB3']};
  data: any[] = this.dataGraph;
  gradient = true;
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
  xScaleMax = new Date('2018-09-30'); // should be dynamic
  yScaleMin = 0;
  xScaleMin = new Date('2018-09-1');
  showGridLines = true;
  curve = shape.curveLinear;

}
