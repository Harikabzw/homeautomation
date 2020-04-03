import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeviceService } from './services/device.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DevicesComponent } from './devices/devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontsModule } from './fonts.module';
import { SnackbarUiService } from './shared/snackbar-ui.service';
import { AuthenticationService } from './auth/authentication.service';

import { AuthGuard } from './auth/auth.guard';
import { HttpJWTInterceptor } from './auth/http-jwt.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegsiterComponent } from './auth/regsiter/regsiter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevicesComponent,
    NavbarComponent,
  
    LoginComponent,
  
    RegsiterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpJWTInterceptor,
    multi: true
  }, AuthGuard, AuthenticationService, DeviceService, SnackbarUiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
