import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ModelComponent } from './components/model/model.component';
import { PageNotFounfComponent } from './components/page-not-founf/page-not-founf.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ModelComponent,
    PageNotFounfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
