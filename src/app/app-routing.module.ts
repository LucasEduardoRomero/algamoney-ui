import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './pages/lancamentos/lancamentos.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'lancamentos',
    component: LancamentosComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
