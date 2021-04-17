import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
})
export class IdentityComponent implements OnInit {
  get parentForm(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    console.log(this.controlContainer);
  }
}
