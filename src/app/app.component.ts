import { Component, OnInit } from '@angular/core';
import { SegmentTableService } from './segment-table.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSegmentComponent } from './add-segment/add-segment.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alore-assignment';
  segmentData = [];

  constructor(private dialog: MatDialog, private segmentTableServie: SegmentTableService) { }

  addEmoji(event) {
    console.log(event.emoji.native);
  }
  ngOnInit() {
    this.segmentData = this.segmentTableServie.getSegmentAndTables();
  }

  addSegment() {
    const dialogResponse = this.dialog.open(AddSegmentComponent);

    dialogResponse.afterClosed().subscribe(response => {
      if (response) {
        console.log(response);
        this.segmentTableServie.addSegment(response.value);
      }
    });
  }
}
