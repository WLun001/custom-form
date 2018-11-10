import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result = {};
  public reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.result = {hello: 'world'};

    this.reactiveForm = this.fb.group({
      result: ['', Validators.required]
    });
  }
}
