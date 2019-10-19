import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { HttpConnectorModule } from './http-connector/http-connector.module';

@NgModule({
  imports: [ HttpClientModule, HttpConnectorModule],
  providers: [ UserService ]
})
export class ServicesModule { }
