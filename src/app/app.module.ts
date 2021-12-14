import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdProjectsComponent } from './std-projects/std-projects.component';
import { TrainingCorpComponent } from './trainings/training-corp/training-corp.component';
import { TrainingIndComponent } from './trainings/training-ind/training-ind.component';
import { ASAnalysisComponent } from './asanalysis/asanalysis.component';
import { NavigationComponent } from './comman/navigation/navigation.component';
import { ToolboxComponent } from './comman/toolbox/toolbox.component';
import { HomeComponent } from './comman/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    StdProjectsComponent,
    TrainingCorpComponent,
    TrainingIndComponent,
    ASAnalysisComponent,
    NavigationComponent,
    ToolboxComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
