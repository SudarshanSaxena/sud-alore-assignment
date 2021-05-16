import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  emoji;
  addTableForm = this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    icon: ['', Validators.required]
  })
  ngOnInit(): void {
  }

  returnTable() {
    return this.addTableForm;
  }

  addEmoji(event) {
    this.addTableForm.get('icon').setValue(event.emoji.native);
    console.log(event.emoji.native);
  }
}
