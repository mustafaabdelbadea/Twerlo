import { RankComponent } from './pages/rank/rank.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'practice', pathMatch: 'full' },
  { path: 'practice', component: PracticeComponent },
  { path: 'rank/:score', component: RankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
