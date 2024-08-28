import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { QuotesComponent } from '../pages/quotes/quotes.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component:LoginComponent
    },
    {
      path:'home',
      component:HomeComponent,

      children: [
        {
            path:'quotes',
            component:QuotesComponent
        }
    ]
    },
    {
      path:'quotes',
      component:QuotesComponent
    }

];
