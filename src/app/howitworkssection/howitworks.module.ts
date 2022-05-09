import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowitworksRoutingModule } from './howitworks-routing.module';
import { GrowcommunityComponent } from './growcommunity/growcommunity.component';
import { StartedrefrComponent } from './startedrefr/startedrefr.component';
import { Cashback2xComponent } from './cashback2x/cashback2x.component';
import { VocallocalComponent } from './vocallocal/vocallocal.component';
import { OnerefrcashComponent } from './onerefrcash/onerefrcash.component';
import { RefrlevelsComponent } from './refrlevels/refrlevels.component';
import { RefrcreatorComponent } from './refrcreator/refrcreator.component';
import { BurncashComponent } from './burncash/burncash.component';


@NgModule({
  declarations: [
    GrowcommunityComponent,
    StartedrefrComponent,
    Cashback2xComponent,
    VocallocalComponent,
    OnerefrcashComponent,
    RefrlevelsComponent,
    RefrcreatorComponent,
    BurncashComponent
  ],
  imports: [
    CommonModule,
    HowitworksRoutingModule
  ]
})
export class HowitworksModule { }
