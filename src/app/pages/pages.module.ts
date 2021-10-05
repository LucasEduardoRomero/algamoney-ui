import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbThemeModule, NbTooltipModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    LancamentosComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbLayoutModule,
    NbThemeModule,
    NbDatepickerModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule
    // NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    // NbButtonModule
  ]
})
export class PagesModule { }
