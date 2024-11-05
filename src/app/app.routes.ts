import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [{ path: '', component: PokemonListComponent }, { path: 'error-message', component: ErrorMessageComponent }
    , { path: 'details/:id', component: PokemonDetailsComponent }
];
