import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
@NgModule({
    imports: [
        
        CommonModule,
        RouterModule.forChild(HomeRoutes),
    ],
    exports: [HomeComponent],
    declarations: [
        
        HomeComponent,
       
    ]
})
export class HomeModule { }