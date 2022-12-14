import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { UserFilterPageRoutingModule } from './user-filter-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ModalService } from '../../shared/services/modal.service';
import { UserAuthService } from './services/user-auth.service';

import { FilterComponent } from './components/filter/filter.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { UserFilterPageComponent } from './user-filter-page.component';
import { AddUserModalComponent } from './components/add-user-modal/add-user-modal.component';
import { ClientsListHeaderComponent } from './components/clients-list-header/clients-list-header.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';

@NgModule({
  declarations: [
    UserFilterPageComponent,
    FilterComponent,
    ClientsListComponent,
    AddUserModalComponent,
    ClientsListHeaderComponent,
    TablePaginatorComponent,
  ],
  imports: [
    UserFilterPageRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [
    ModalService,
    UserAuthService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TablePaginatorComponent),
      multi: true,
    },
  ],
})
export class UserFilterPageModule {}
