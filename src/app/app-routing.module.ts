import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASAnalysisComponent } from './asanalysis/asanalysis.component';
import { BlogComponent } from './comman/blog/blog.component';
import { ContactComponent } from './comman/contact/contact.component';
import { HomeComponent } from './comman/home/home.component';
import { ToolboxComponent } from './comman/toolbox/toolbox.component';
import { StdProjectsComponent } from './std-projects/std-projects.component';
import { TrainingCorpComponent } from './trainings/training-corp/training-corp.component';
import { TrainingIndComponent } from './trainings/training-ind/training-ind.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'asanalysis', component: ASAnalysisComponent },
  { path: 'training-ind', component: TrainingIndComponent },
  { path: 'training-crop', component: TrainingCorpComponent },
  { path: 'std-projects', component: StdProjectsComponent },
  { path: 'toolbox', component: ToolboxComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
