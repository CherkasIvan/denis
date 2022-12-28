import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

import { InsurancePoliciesModalModule } from './components/insurance-policies-modal/insurance-policies-modal.module';

import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { InputClearerComponent } from './components/input-clearer/input-clearer.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { InputSliderComponent } from './components/input-slider/input-slider.component';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers/counter-button.reducer';

@NgModule({
  declarations: [
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    ApplicationFormComponent,
    InputClearerComponent,
    LoanParamsComponent,
    InputSliderComponent,
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
  ],
  exports: [
    ApplicationFormComponent,
    InputSliderComponent,
    FormsModule,
    LoanParamsComponent,
    BackendErrorMessagesComponent,
    CounterButtonComponent,
    FormsModule,
    InsurancePoliciesModalModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    InputClearerComponent,
  ],
})
export class SharedModule {}
