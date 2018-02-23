import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { LibraryComponent } from './components/library/library.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/games/games.component';
import { routing } from './app.router';
import { LessonsComponent } from './components/lessons/lessons.component';
import { IntroQuizComponent } from './components/intro-quiz/intro-quiz.component';


import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDu7CO9nClM-MsSlKwphWRHDCCFPMDrLDQ",
  authDomain: "speak-easy-ac062.firebaseapp.com",
  databaseURL: "https://speak-easy-ac062.firebaseio.com",
  projectId: "speak-easy-ac062",
  storageBucket: "speak-easy-ac062.appspot.com",
  messagingSenderId: "93421122299"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LibraryComponent,
    ProfileComponent,
    AboutComponent,
    GamesComponent,
    LessonsComponent,
    IntroQuizComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
