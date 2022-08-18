import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent
  ],
  exports: [
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    AvatarModule
  ]
})

export class LayoutModule {}
