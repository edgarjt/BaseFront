import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { NotFountComponent } from "./layout/not-fount/not-fount.component";

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {
    path: '', component: NavigationComponent,
    children: [
      { path: 'dummy', loadChildren: () => import('./pages/dummy/dummy.module').then(m => m.DummyModule) }
    ]
  },
  {
    path: 'error', component: NotFountComponent
  },
  {
    path: '**', redirectTo: 'error', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
