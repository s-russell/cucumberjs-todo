import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from '../../../environments/environment'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...environment.httpConnectorImports
  ]
})
export class HttpConnectorModule { }
