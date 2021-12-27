import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { BloqueadorGuard } from './guards/bloqueador.guard';

const routes: Routes = [
    {
        path: 'cursos',
        loadChildren: 'src/app/courses/courses.module#CoursesModule',
        canActivate: [BloqueadorGuard], // Guarda de rotas
        canLoad: [BloqueadorGuard] // Permissão de carregamento sob demanda do modulo
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}