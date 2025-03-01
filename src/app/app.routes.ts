import { Routes } from '@angular/router';
import { LoginusuarioComponent } from './components/usuario/loginusuario/loginusuario.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CriarusuarioComponent } from './components/usuario/criarusuario/criarusuario.component';
import { CriarprodutoComponent } from './components/produtos/criarproduto/criarproduto.component';
import { ListarprodutoComponent } from './components/produtos/listarproduto/listarproduto.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { PerfilusuarioComponent } from './components/usuario/perfilusuario/perfilusuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para login ao acessar "/"
  { path: 'login', component: LoginusuarioComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [{ path: 'perfilusuario', component: PerfilusuarioComponent }]
  },
  {
    path: 'usuario',
    component: PrincipalComponent,
    children: [
      { path: 'criar', component: CriarusuarioComponent }
    ]
  },
  {
    path: 'produtos',
    component: PrincipalComponent,
    children: [
      { path: 'adicionar', component: CriarprodutoComponent },
      { path: 'listar', component: ListarprodutoComponent }
    ]
  }
];
