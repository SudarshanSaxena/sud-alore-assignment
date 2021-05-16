import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegmentTableService {
  segmentAndTableObjArray = [
    {
      name: 'segment 1',
      icon: 'icon 1',
      description: 'description 1',
      tables: [
        {
          name: 'table 1',
          color: 'color 1',
          icon: 'icon t 1'
        },
        {
          name: 'table 2',
          color: 'color 2',
          icon: 'icon t 2'
        }
      ]
    },
    {
      name: 'segment 2',
      icon: 'icon 2',
      description: 'description 2',
      tables: [
        {
          name: 'table 2',
          color: 'color 2',
          icon: 'icon t 2'
        },
        {
          name: 'table 2',
          color: 'color 2',
          icon: 'icon t 2'
        }
      ]
    }
  ];

  constructor() { }

  getSegmentAndTables() {
    return this.segmentAndTableObjArray;
  }

  addSegment(segmentData) {
    this.segmentAndTableObjArray.push(segmentData);
  }

  addTable(segment, tableData) {
    console.log('debug');
    let foundSegment;
    this.segmentAndTableObjArray.forEach(item => {
      if (item.name == segment.name) {
        foundSegment = segment;
      }
    })
    if (foundSegment) {
      foundSegment.tables.push(tableData);
    }
  }
}
