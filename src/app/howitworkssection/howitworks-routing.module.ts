import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeeasystepsComponent } from './threeeasysteps/threeeasysteps.component';

const routes: Routes = [
  { path: 'threesteps', component: ThreeeasystepsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowitworksRoutingModule {}
