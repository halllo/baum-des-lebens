import { Component, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { CircleItemComponent } from './circle-item.component';

@Component({
  selector: 'circle-container',
  templateUrl: './circle-container.component.html',
  styleUrls: ['./circle-container.component.css']
})
export class CircleContainerComponent {
  @ContentChildren(CircleItemComponent) items: QueryList<CircleItemComponent>;
  ringindicators: RingIndicator[];

  constructor(private cdRef:ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    let circleItms = this.items.filter(item => !!item.year);
    let years = circleItms.map(item => item.year).filter(onlyUnique).sort();
    let rings = years.map((year, index) => new RingIndicator(year, index, years.length));
    this.ringindicators = rings;
    this.cdRef.detectChanges();

    for (let item of circleItms) {
      let ring = this.ringindicators.find(ring => ring.label == item.year);
      item.distance = ring.itemdistance;
    }
  } 
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

class RingIndicator {
  labeldistance: number;
  itemdistance: number
  diameter: number;
  bordermargin: number;

  constructor(
    public label: number,
    index: number,
    allRingsCount: number,
  ) {
    const circleContainerDiameter = 70;
    let width = circleContainerDiameter / 2 / allRingsCount;
    this.itemdistance = index * width + width / 2;
    this.labeldistance = index * width;
    this.diameter = index * width * 2;
    this.bordermargin = circleContainerDiameter / 2 - this.diameter / 2;
  }
}