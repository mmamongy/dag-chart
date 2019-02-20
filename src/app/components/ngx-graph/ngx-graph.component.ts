import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-ngx-graph',
  templateUrl: './ngx-graph.component.html',
  styleUrls: ['./ngx-graph.component.scss']
})
export class NgxGraphComponent implements OnInit {
  name = 'Angular 5';
  // settings 
  view : any[];
  width: number = 1000; 
  height: number = 600 ;
  fitContainer = true;
  autoZoom = true;
  panOnZoom = true;
  enableZoom = true;
  autoCenter = true;
  hierarchialGraph = {nodes: [], links: []}
  curve = shape.curveBundle.beta(1);
  // curve = shape.curveLinear;

  public ngOnInit():void {
    this.showGraph();
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

}
