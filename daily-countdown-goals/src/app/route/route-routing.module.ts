import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { StartComponent } from '../start/start.component';
import { SetupComponent } from '../setup/setup.component';
import { ResumeComponent } from '../resume/resume.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'start',
      pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }