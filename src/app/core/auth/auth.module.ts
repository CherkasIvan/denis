import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import {StoreModule} from '@ngrx/store';
import {reducers} from './store/auth.reducers';
import {AuthService} from './service/auth.service';

import {AuthEffects} from './store/auth.effects';
import {BackendErrorMessagesModule} from '../../pages/shared/modules/backend-error-messages/backend-error-messages.module';
import {PersistenceService} from '../../pages/shared/services/persistence.service';
import {AuthTabsComponent} from './components/auth-tabs/auth-tabs.component';
import {TesNavigationLogoComponent} from './components/tes-navigation-logo/tes-navigation-logo.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [
    RegisterComponent,
    AuthTabsComponent,
    TesNavigationLogoComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('register', reducers),
    EffectsModule.forFeature([AuthEffects]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
