import { Component, Input, OnInit } from '@angular/core';
import { SegmentTableService } from '../segment-table.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTableComponent } from '../add-table/add-table.component';
@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {
  @Input() name = '';
  @Input() tables = [];
  @Input() segment = '';

  constructor(private dialog: MatDialog, private segmentTableService: SegmentTableService) { }

  ngOnInit(): void {
  }

  addTable() {
    const dialogResponse = this.dialog.open(AddTableComponent);

    dialogResponse.afterClosed().subscribe(response => {
      if (response) {
        this.segmentTableService.addTable(this.segment, response.value);
      }
    });

  }
}
