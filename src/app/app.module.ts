import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { HeaderComponent } from "./header/header.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { HomeComponent } from "./home/home.component";
import { AnotherComponent } from "./another/another.component";

import { ButtonModule } from "primeng/button";
import { CheckboxModule} from "primeng/checkbox";
import { FormComponent } from "./form/form.component";
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    TaskListComponent,
    HomeComponent,
    AnotherComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
