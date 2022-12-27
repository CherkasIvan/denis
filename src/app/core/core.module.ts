import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrokersAuthGuard } from './guards/brokers-auth.guard';

import { BrokerTokenInterceptor } from './interceptor/broker-token.interceptor';

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
  imports: [CommonModule],
})
export class CoreModule {}
