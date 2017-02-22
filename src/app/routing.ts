// Importer les class nécessaires pour la config des routes :
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer les composants à utiliser dans les routes :
import { ConnectedComponent } from './components/connected/connected.component';
import { LoginComponent } from './components/login/login.component';

// Déclarer une contante de type Routes :
const appRoutes: Routes = [

    // Définition de la route login :
    {
        path: 'login',
        component: LoginComponent
    },

    // Définition de la route connected :
    {
        path: 'connected',
        component: ConnectedComponent
    },

    // Définition de la redirection pour la page d'accueil :
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

];

// Exporter une constante pour les routes :
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);