import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from "@angular/fire/compat"; 
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SplashScreen } from '@capacitor/splash-screen';
import { SplashPageModule } from './splash/splash.module';
 


import { ScreenOrientation} from '@ionic-native/screen-orientation/ngx'
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, HomeComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  SplashPageModule 
], 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ,ScreenOrientation],
  bootstrap: [AppComponent],
})
export class AppModule {}
