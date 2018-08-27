import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FreeQuestionComponent } from './free-question/free-question.component';
import { HttpModule } from '@angular/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { IesComponent } from './ies/ies.component';
import { CdsComponent } from './cds/cds.component';
import { Nda1Component } from './nda-1/nda-1.component';
import { Nda2Component } from './nda-2/nda-2.component';
import { CapfComponent } from './capf/capf.component';
import { ScraComponent } from './scra/scra.component';
import { PscComponent } from './psc/psc.component';
import { FilteringComponent } from './filtering/filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    FreeQuestionComponent,
    ContactUsComponent,
    HomeComponent,
    IesComponent,
    CdsComponent,
    Nda1Component,
    Nda2Component,
    CapfComponent,
    ScraComponent,
    PscComponent,
    FilteringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,EventService,AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
