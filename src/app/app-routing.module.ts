import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectPageComponent} from './project-page/project-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
 // { path: '', component: ProjectCardsComponent },
 { path: '', component: LandingPageComponent },
 { path: 'radio_station/:stationId', component: LandingPageComponent },
 { path: 'search/:partnerName', component: LandingPageComponent },
 { path: 'radio_station/:stationId/:projectId', component: ProjectPageComponent },
 { path: 'project/:projectId', component: ProjectPageComponent },
 { path: 'project/:projectId/:programId', component: ProjectPageComponent },
 { path: 'project/:projectId/:programId/:logId', component: ProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
