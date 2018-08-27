import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { FreeQuestionComponent } from './free-question/free-question.component';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'FreePractice',
    component: FreeQuestionComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'IES',
    component: IesComponent
  },
  {
    path: 'CDS',
    component: CdsComponent
  },
  {
    path: 'NDA-1',
    component: Nda1Component
  },
  {
    path: 'NDA-2',
    component: Nda2Component
  },
  {
    path: 'CAPF',
    component: CapfComponent
  },
  {
    path: 'SCRA',
    component: ScraComponent
  },
  {
    path: 'PSC',
    component: PscComponent
  },
  {
    path: 'search',
    component: FilteringComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
