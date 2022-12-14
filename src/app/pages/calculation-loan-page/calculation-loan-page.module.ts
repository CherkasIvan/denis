import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/calculationLoanPageReducers';
import { CalcultionLoanPageEffects } from './store/calculationLoanPage.effects';

import { CalculationLoanPageRoutingModule } from './calculation-loan-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ClientDataService } from 'src/app/shared/services/client-data.service';

import { CarInfoComponent } from './components/car-info/car-info.component';
import { OwnerComponent } from './components/owner/owner.component';
import { DriversPageComponent } from './components/drivers/drivers-page.component';
import { LoanParamsComponent } from './components/loan-params/loan-params.component';
import { InsurensesParamsComponent } from './components/insurenses-params/insurenses-params.component';
import { DriversContentComponent } from './components/drivers/drivers-content/drivers-content.component';
import {
  InsurancePoliceCalculationDialog
} from './components/product-calculation/dialogs/insurance-policy-calculation-dialog/insurance-policy-calculation-dialog.component';
import {
  InsurancePolicyCardComponent
} from './components/product-calculation/dialogs/insurance-policy-calculation-dialog/insurance-policy-card/insurance-policy-card.component';
import {
  InsurancePolicyOptionsComponent
} from './components/product-calculation/dialogs/insurance-policy-calculation-dialog/insurance-policy-options/insurance-policy-options.component';
import { MatTableModule } from '@angular/material/table';
import { ProductCalculationPageComponent } from './components/product-calculation/product-calculation-page.component';
import { ProductCalculationTableComponent } from './components/product-calculation/product-calculation-table/product-calculation-table.component';

@NgModule({
  declarations: [
    CarInfoComponent,
    OwnerComponent,
    DriversPageComponent,
    LoanParamsComponent,
    InsurensesParamsComponent,
    DriversContentComponent,
    InsurancePoliceCalculationDialog,
    InsurancePolicyCardComponent,
    InsurancePolicyOptionsComponent,
    ProductCalculationPageComponent,
    ProductCalculationTableComponent,
  ],
  exports: [CarInfoComponent],
  imports: [
    CommonModule,
    CalculationLoanPageRoutingModule,
    SharedModule,
    StoreModule.forFeature('calculationLoanPage', reducers),
    EffectsModule.forFeature([CalcultionLoanPageEffects]),
    MatTableModule
  ],
  providers: [ClientDataService],
})
export class CalculationLoanPageModule {}
