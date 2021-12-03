import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { SlidesComponent } from './components/slides/slides.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [InicioComponent, SlidesComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ], exports:[InicioComponent, SlidesComponent]
})
export class HomeModule { }
