import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './pages/dashboard/dashboard-container/dashboard-container.component';
import { CategoryContainerComponent } from './pages/category/category-container/category-container.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'category', component: CategoryContainerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
