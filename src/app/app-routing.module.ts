import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'detail/:index',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'tambah',
    loadChildren: () =>
      import('./tambah/tambah.module').then((m) => m.TambahPageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'drafttambah',
    loadChildren: () =>
      import('./drafttambah/drafttambah.module').then(
        (m) => m.DrafttambahPageModule
      ),
  },
  {
    path: 'draftlist',
    loadChildren: () =>
      import('./draftlist/draftlist.module').then((m) => m.DraftlistPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
