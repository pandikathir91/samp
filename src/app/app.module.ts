import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IComponent } from './i/i.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ExerciseComponent } from './exercise/exercise.component';

const ROUTES: Route[] = [
   { path: '', component: HomeComponent},
   { path: 'login', component: LoginComponent},
   { path: 'i', component: IComponent},
   { path: 'exercise', component: ExerciseComponent},
   { path: 'keyboard', component: KeyboardComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IComponent,
    KeyboardComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
    HttpClientModule,
	RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
