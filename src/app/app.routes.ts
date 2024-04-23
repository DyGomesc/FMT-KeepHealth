import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DietaComponent } from './pages/dieta/dieta.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'perfil',
                component: PerfilComponent
            },
            {
                path: 'dietas',
                component: DietaComponent
            }
        ]
    }
];
