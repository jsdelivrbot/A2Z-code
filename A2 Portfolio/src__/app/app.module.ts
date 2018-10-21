import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { TypingComponent } from './typing/typing.component';

import { ProjectDataService } from './services/project-data.service';
import { SkillsService } from './services/skills.service';
import { TagsService } from './services/tags.service';

import { appRouting } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { BackIconComponent } from './back-icon/back-icon.component';
import { CrossIconComponent } from './cross-icon/cross-icon.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { ProjectCardComponent } from './project-card/project-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProjectDetailsComponent,
    ProjectsComponent,
    TypingComponent,
    DpLogoComponent,
    BackIconComponent,
    CrossIconComponent,
    LandingPageComponent,
    KeySkillBtnsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule, appRouting, BrowserAnimationsModule
  ],
  providers: [ProjectDataService, SkillsService, TagsService, { provide: APP_BASE_HREF, useValue: '!' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
