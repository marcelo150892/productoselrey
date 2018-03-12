import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';



import { FacturasModule } from './facturas/facturas.module';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel/hero-carousel.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { SubmenuComponent } from './submenu/submenu/submenu.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NosotrosComponent } from './informacion/nosotros/nosotros.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent,
    canActivate: [GuardService]},
  {path: 'addprovee', component: AddproveeComponent,
    canActivate: [GuardService]},
  {path: 'addpres', component: AddpresComponent,
  canActivate: [GuardService]},
  {path: 'presupuestos', component: PresupuestosComponent,
  canActivate: [GuardService]},
  {path: 'editpres/:id', component: EditpresComponent,
  canActivate: [GuardService]},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inises', component: InisesComponent},
  { path: 'facturas', component: FacturasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {path: '**', component: InicioComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    HeroCarouselComponent,
    CarouselComponent,
    SubmenuComponent,
    FooterComponent,
    NosotrosComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule,
  ],
  providers: [ProveedoresService,
              PresupuestosService,
              AutenticacionService,
              GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
