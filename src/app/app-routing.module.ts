import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PublicApiComponent } from './components/public-api/public-api.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'public-api', component: PublicApiComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
