import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QwertyComponent } from './qwerty/qwerty.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'' ,component:QwertyComponent},{path:'Login',component:LoginComponent},{path:'Register',component:RegisterComponent},];

@NgModule({
  declarations: [
    AppComponent,
    QwertyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
