import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes creado por nosotros
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Modulos Creados
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  //Aqui ponemos los componentes exportados
  declarations: [
    AppComponent
  ],
  //Aqui importamos los modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
