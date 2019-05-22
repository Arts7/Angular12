import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GamingComponent } from './gaming/gaming.component';
import { IsMajeurPipe } from './is-majeur.pipe';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { PlanetComponent } from './planet/planet.component';
import { PeekAbooComponent } from './peek-aboo/peek-aboo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    GamingComponent,
    IsMajeurPipe,
    SolarSystemComponent,
    PlanetComponent,
    PeekAbooComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "home",
          component: HomeComponent,
          pathMatch: "full"
        },
        {
          path: "contact",
          component: ContactComponent,
          pathMatch: "full"
        },
        {
          path: "gaming/:",
          component: GamingComponent,
          pathMatch: "full"
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
