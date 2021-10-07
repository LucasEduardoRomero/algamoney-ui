import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbInputModule, NbCardModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
