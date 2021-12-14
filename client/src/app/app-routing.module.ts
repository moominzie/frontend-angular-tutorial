import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { ModelComponent } from './components/model/model.component';
import { PageNotFounfComponent } from './components/page-not-founf/page-not-founf.component';

const routes: Routes = [
  {path: '', component:ModelComponent},
  {path: 'hello', component:HelloComponent, children:[{path:'model', component:ModelComponent}]},
  {path: '**',component:PageNotFounfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
