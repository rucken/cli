import { Routes } from '@angular/router';
import { AuthGuardService, HomeGuardService } from '@rucken/web';

import { <%=app.classPrefix%>AccountPageRoutes } from './pages/account-page/account-page.routes';
import { <%=app.classPrefix%>AdminPageRoutes } from './pages/admin-page/admin-page.routes';
import { <%=app.classPrefix%>HomePageRoutes } from './pages/home-page/home-page.routes';
import { <%=app.classPrefix%>ThemesPageRoutes } from './pages/themes-page/themes-page.routes';

export const <%=app.classPrefix%>Routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#<%=app.classPrefix%>HomePageModule',
    data: <%=app.classPrefix%>HomePageRoutes[0].data,
    canActivate: [HomeGuardService]
  },
  {
    path: 'themes',
    loadChildren: './pages/themes-page/themes-page.module#<%=app.classPrefix%>ThemesPageModule',
    data: <%=app.classPrefix%>ThemesPageRoutes[0].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: './pages/admin-page/admin-page.module#<%=app.classPrefix%>AdminPageModule',
    data: <%=app.classPrefix%>AdminPageRoutes[1].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    loadChildren: './pages/account-page/account-page.module#<%=app.classPrefix%>AccountPageModule',
    data: <%=app.classPrefix%>AccountPageRoutes[1].data,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
