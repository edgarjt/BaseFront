import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavigationComponent } from "./navigation/navigation.component";

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
    AppRoutingModule,
    MaterialModule
  ]
})

export class LayoutModule {}
