import { Routes } from '@angular/router';
import { AccueiComponent } from './accuei/accuei.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
export const routes: Routes = [
    { 
        path: 'accuei',
        component:  AccueiComponent
    },
    { 
        path: 'connection',
        component: ConnexionComponent
    },
    { 
        path: 'inscription', 
        component:  InscriptionComponent
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'connexion'
    },
    
];
