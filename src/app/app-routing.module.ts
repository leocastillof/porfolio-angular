import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/skills/new-experience.component';
import { EditExperienceComponent } from './components/skills/edit-experience.component';
import { NewEducationComponent } from './components/about/new-education.component';
import { EditEducationComponent } from './components/about/edit-education.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewAboutmeComponent } from './components/about/new-aboutme.component';
import { EditAboutmeComponent } from './components/about/edit-aboutme.component';

// Rutas de navegación
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-experience', component: NewExperienceComponent },
  { path: 'edit-experience/:id', component: EditExperienceComponent },
  { path: 'new-education', component: NewEducationComponent },
  { path: 'edit-education/:id', component: EditEducationComponent },
  { path: 'new-skill', component: NewSkillComponent },
  { path: 'edit-skill/:id', component: EditSkillComponent },
  { path: 'new-aboutme', component: NewAboutmeComponent },
  { path: 'edit-aboutme/:id', component: EditAboutmeComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
