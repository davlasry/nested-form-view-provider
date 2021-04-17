import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = this.formBuilder.group({
    age: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  submit(): void {
    // console.log(this.form.value);
    // console.log(this.form.errors);
    // console.log("form.valid", this.form.valid);
  }
}
