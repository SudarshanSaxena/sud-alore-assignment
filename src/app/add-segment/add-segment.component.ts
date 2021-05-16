import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.scss']
})
export class AddSegmentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  addSegmentForm = this.fb.group({
    name: ['', Validators.required],
    icon: ['', Validators.required],
    description: ['', Validators.required],
    tables: [[]]
  })

  returnSegment() {
    return this.addSegmentForm;
  }

  addEmoji(event) {
    this.addSegmentForm.get('icon').setValue(event.emoji.native);
    console.log(event.emoji.native);
  }


  ngOnInit(): void {
  }

}
