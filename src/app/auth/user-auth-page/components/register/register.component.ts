import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatTooltip } from '@angular/material/tooltip';

import { select, Store } from '@ngrx/store';
import { userRegisterAction } from '../../store/actions/userRegister.action';
import {
  isSubmittingRegisterSelector,
  validationRegisterErrorsSelector,
} from '../../store/selectors/userAuth.selectors';

import { Observable } from 'rxjs';

import { BackendErrorsType } from '../../../../shared/models/types/backendErrors.type';
import { UserRegisterRequestType } from '../../models/types/user-register-request.type';

@Component({
  selector: 'tes-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  public authForm!: FormGroup;

  public isSubmitting$?: Observable<boolean>;
  public backandErrors$!: Observable<BackendErrorsType | null>;

  constructor(
    private _fb: UntypedFormBuilder,
    private readonly _store: Store
  ) {}

  public ngOnInit(): void {
    this.initializeRegistrationForm();
    this.initializeValues();
  }

  public initializeValues(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingRegisterSelector));
    this.backandErrors$ = this._store.pipe(
      select(validationRegisterErrorsSelector)
    );
  }

  public initializeRegistrationForm(): void {
    this.registrationForm = this._fb.group({
      phone: ['', Validators.required],
      test: true,
    });
  }

  public openTooltip(tooltip: MatTooltip): void {
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 1500);
  }

  public onSubmitRegistration(): void {
    const request: UserRegisterRequestType = this.registrationForm.value;
    this._store.dispatch(userRegisterAction({ request }));
  }
}
