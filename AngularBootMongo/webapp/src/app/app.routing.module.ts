import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompanyComponent } from '../app/create-company/create-company.component';

const routes: Routes = [
    { path: '', redirectTo: 'company', pathMatch: 'full' },
    { path: 'Companies', component: CreateCompanyComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
