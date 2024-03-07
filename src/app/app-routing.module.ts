import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AnotherComponent } from "./another/another.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "another", component: AnotherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
