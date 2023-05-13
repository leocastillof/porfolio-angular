import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { AudioComponent } from './components/audio/audio.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterceptorService } from './service/interceptor-service';
import { NewExperienceComponent } from './components/skills/new-experience.component';
import { EditExperienceComponent } from './components/skills/edit-experience.component';
import { NewEducationComponent } from './components/about/new-education.component';
import { EditEducationComponent } from './components/about/edit-education.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewAboutmeComponent } from './components/about/new-aboutme.component';
import { EditAboutmeComponent } from './components/about/edit-aboutme.component';
import { NewContactComponent } from './components/contact/new-contact.component';
import { EditContactComponent } from './components/contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    PageNotFoundComponentComponent,
    NavmenuComponent,
    AudioComponent,
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewAboutmeComponent,
    EditAboutmeComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
