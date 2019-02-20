import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { colorSets } from './../../color-sets';

@Component({
  selector: 'app-ngx-graph',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ngx-graph.component.html',
  styleUrls: ['./ngx-graph.component.scss']
})
export class NgxGraphComponent implements OnInit {
  name = 'Angular 5';
  // settings 
  view : any[];
  width: number = 1000; 
  height: number = 600 ;
  fitContainer = false;
  autoZoom = true;
  panOnZoom = true;
  enableZoom = true;
  autoCenter = true;
  hierarchialGraph = {nodes: [], links: []}
  curve = shape.curveBundle.beta(1);
  // curve = shape.curveLinear;
  showLegend = true;
  orientation = 'LR'; // LR, RL, TB, BT
  curveType = 'Linear';
  colorSchemes: any;
  colorScheme: any;
  schemeType = 'ordinal';
  selectedColorScheme: string;
   // line interpolation
   interpolationTypes = [
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
];


  constructor(){
    Object.assign(this, {
      colorSchemes: colorSets,
  });

  this.setColorScheme('picnic');
  this.setInterpolationType('Bundle');
  }

  select(data) {
    console.log('Item clicked', data);
}

setColorScheme(name) {
    this.selectedColorScheme = name;
    this.colorScheme = this.colorSchemes.find(s => s.name === name);
}

setInterpolationType(curveType) {
    this.curveType = curveType;
    if (curveType === 'Bundle') {
        this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === 'Cardinal') {
        this.curve = shape.curveCardinal;
    }
    if (curveType === 'Catmull Rom') {
        this.curve = shape.curveCatmullRom;
    }
    if (curveType === 'Linear') {
        this.curve = shape.curveLinear;
    }
    if (curveType === 'Monotone X') {
        this.curve = shape.curveMonotoneX;
    }
    if (curveType === 'Monotone Y') {
        this.curve = shape.curveMonotoneY;
    }
    if (curveType === 'Natural') {
        this.curve = shape.curveNatural;
    }
    if (curveType === 'Step') {
        this.curve = shape.curveStep;
    }
    if (curveType === 'Step After') {
        this.curve = shape.curveStepAfter;
    }
    if (curveType === 'Step Before') {
        this.curve = shape.curveStepBefore;
    }
}


  public ngOnInit():void {
    this.showGraph();
    
    if (!this.fitContainer) {
      this.applyDimensions();
  }
  }

  
  applyDimensions() {
    this.view = [this.width, this.height];
}
  showGraph() {
    this.hierarchialGraph.nodes = [
  {
    id: 'start',
    label: 'scan',
    position: 'x0'
  }, {
    id: '1',
    label: 'Event#a',
    position: 'x1'
  }, {
    id: '2',
    label: 'Event#x',
    position: 'x2'
  }, {
    id: '3',
    label: 'Event#b',
    position: 'x3'
  }, {
    id: '4',
    label: 'Event#c',
    position: 'x4'
  }, {
    id: '5',
    label: 'Event#y',
    position: 'x5'
  }, {
    id: '6',
    label: 'Event#z',
    position: 'x6'
  }
  ];

  this.hierarchialGraph.links = [
  {
    source: 'start',
    target: '1',
    label: 'Process#1'
  }, {
    source: 'start',
    target: '2',
    label: 'Process#2'
  }, {
    source: '1',
    target: '3',
    label: 'Process#3'
  }, {
    source: '2',
    target: '4',
    label: 'Process#4'
  }, {
    source: '2',
    target: '6',
    label: 'Process#6'
  }, {
    source: '3',
    target: '5'
  }
  ];

  }

   // options
  
   orientations: any[] = [
       {
           label: 'Left to Right',
           value: 'LR'
       },
       {
           label: 'Right to Left',
           value: 'RL'
       },
       {
           label: 'Top to Bottom',
           value: 'TB'
       },
       {
           label: 'Bottom to Top',
           value: 'BT'
       }
   ];

  

  
   onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
}

toggleExpand(node) {
    console.log('toggle expand', node);
}

updateChart() {
    // this.update$.next(true);
}

zoomToFit() {
    // this.zoomToFit$.next(true);
}

center() {
    // this.center$.next(true);
}

  

}
