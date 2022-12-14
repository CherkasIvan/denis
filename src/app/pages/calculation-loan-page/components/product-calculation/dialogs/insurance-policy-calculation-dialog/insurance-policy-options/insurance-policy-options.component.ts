import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalSpecialOptionsinterface } from 'src/app/shared/models/interfaces/modal-special-options.interface';

@Component({
  selector: 'tes-insurance-policy-options',
  templateUrl: './insurance-policy-options.component.html',
  styleUrls: ['./insurance-policy-options.component.scss'],
})
export class InsurancePolicyOptionsComponent implements OnInit {
  @Input() public specialOptions!: ModalSpecialOptionsinterface[];
  public optionsModalForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  public initializeForm(): void {
    this.optionsModalForm = this._fb.group({
      option_1: ['', Validators.required],
      option_2: ['', Validators.required],
      option_3: ['', Validators.required],
      option_4: ['', Validators.required],
    });
  }

  public submitForm(optionsModalForm: FormGroup): void {
    console.log(optionsModalForm.value);
  }

  public changeOption2(e: Event): void {
    this.option2Status?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  public changeOption4(e: Event): void {
    this.option4Status?.setValue((e.target as HTMLInputElement).value, {
      onlySelf: true,
    });
  }

  get option2Status() {
    return this.optionsModalForm.get('option_2');
  }

  get option4Status() {
    return this.optionsModalForm.get('option_4');
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
