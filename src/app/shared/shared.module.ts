import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/counter-button.reducer';

import { InsurancePoliciesModalModule } from './components/insurance-policies-modal/insurance-policies-modal.module';

import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { InputClearerComponent } from './components/input-clearer/input-clearer.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { InputSliderComponent } from './components/input-slider/input-slider.component';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { SubmitFormButtonComponent } from './components/submit-form-button/submit-form-button.component';
import { TesInputBasicComponent } from './components/tes-input-basic/tes-input-basic.component';
import { TesInputCheckboxComponent } from './components/tes-input-checkbox/tes-input-checkbox.component';
import { TesInputSlideToggleComponent } from './components/tes-input-slide-toggle/tes-input-slide-toggle.component';

@NgModule({
  declarations: [
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    ApplicationFormComponent,
    InputClearerComponent,
    LoanParamsComponent,
    InputSliderComponent,
    FilterInputComponent,
    SubmitFormButtonComponent,
    TesInputBasicComponent,
    TesInputCheckboxComponent,
    TesInputSlideToggleComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    MatTabsModule,
    StoreModule.forFeature('counter-button', reducers),
    InsurancePoliciesModalModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ApplicationFormComponent,
    FilterInputComponent,
    InputSliderComponent,
    FormsModule,
    SubmitFormButtonComponent,
    LoanParamsComponent,
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    FormsModule,
    InsurancePoliciesModalModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    InputClearerComponent,
    TesInputBasicComponent,
    TesInputCheckboxComponent,
    TesInputSlideToggleComponent,
  ]
})
export class SharedModule {}
