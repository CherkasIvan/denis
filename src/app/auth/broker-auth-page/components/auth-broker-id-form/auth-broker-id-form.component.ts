import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { Store, select } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/broker-auth.selectors';
import { authBrokerAction } from '../../store/broker-auth.action';

import { Observable } from 'rxjs';

import { BackendErrorsInterface } from '../../../../shared/types/backendErrors.interface';

import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'app-auth-broker-id-form',
  templateUrl: './auth-broker-id-form.component.html',
  styleUrls: ['./auth-broker-id-form.component.scss'],
})
export class AuthBrokerIdFormComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsInterface | null>;
  public checkboxSucces: boolean = false;

  constructor(private _fb: UntypedFormBuilder, private _store: Store) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backandErrors$ = this._store.pipe(select(validationErrorsSelector));
  }

  public initializeForm(): void {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = this.registrationForm.value;
    this._store.dispatch(authBrokerAction({ request }));
  }
}
