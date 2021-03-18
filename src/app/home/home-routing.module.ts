import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home';
import { ProfileComponent } from './profile/profile';

const routes: Routes = [{
    path: '',
    component: HomeComponent
},
{
    path: 'profile',
    component: ProfileComponent
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }