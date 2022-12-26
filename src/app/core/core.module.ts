<<<<<<< HEAD
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthModule} from './auth.module';
=======
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrokersAuthGuard } from './guards/brokers-auth.guard';

import { BrokerAuthModule } from '../pages/broker-auth/broker-auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrokerTokenInterceptor } from './interceptor/broker-token.interceptor';
>>>>>>> ed7839c66f655bbe579ef1b941cbf57cf4ea4a9f

@NgModule({
  declarations: [],
  providers: [
    BrokersAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrokerTokenInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, BrokerAuthModule],
})
export class CoreModule {}
