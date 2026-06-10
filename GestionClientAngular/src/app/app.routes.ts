import { Routes } from '@angular/router';
import { ClientList } from './client-list/client-list';
import { CreateClient } from './create-client/create-client';
import { UpdateClient } from './update-client/update-client';
import { ClientDetails } from './client-details/client-details';

export const routes: Routes = [
  {path: 'clients', component: ClientList},
  {path: 'create-client', component: CreateClient},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'update-client/:id', component: UpdateClient},
  {path: 'client-details/:id', component: ClientDetails}
];
