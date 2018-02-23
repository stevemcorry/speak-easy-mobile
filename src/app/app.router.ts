import { HomeComponent } from './components/home/home.component';
//import { ProfileComponent } from './components/profile/profile.component';

import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/games/games.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IntroQuizComponent } from './components/intro-quiz/intro-quiz.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'games', component: GamesComponent },
    { path: 'intro-quiz', component: IntroQuizComponent },
    { path: 'profile/:id', component: ProfileComponent },
    
    { path: '404', component: HomeComponent},
    { path: '**', redirectTo: '/404'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);