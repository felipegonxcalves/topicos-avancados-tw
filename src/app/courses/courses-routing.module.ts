import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from '../courses-list/courses-list.component';

const routes: Routes = [
    {
        path: ':nome',
        component: CoursesListComponent
    }
    // {
    //     path: 'cursos',
    //     children: [
    //          // {
    //         //     path: 'novo',
    //         //     component: CoursesListComponent
    //         // },
    //         // {
    //         //     path: 'atualizar',
    //         //     component: CoursesListComponent
    //         // }
    //         {
    //             path: ':nome',
    //             component: CoursesListComponent                
    //         }           
    //     ]
    // }   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoursesRoutingModule {}