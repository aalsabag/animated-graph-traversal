import { Component, OnInit } from '@angular/core';
import { Edge, Node, Layout, ClusterNode } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-full-graph',
  templateUrl: './full-graph.component.html',
  styleUrls: ['./full-graph.component.css']
})
export class FullGraphComponent implements OnInit {
  zoomToFit$: Subject<boolean> = new Subject();
  update$: Subject<boolean> = new Subject();
  fitGraph(): void {
    this.zoomToFit$.next(true);
  }

  updateGraph(): void {
    this.update$.next(true);
  }
  constructor() { }

  ngOnInit(): void {
    this.fitGraph();
    this.updateGraph();
  }

}
