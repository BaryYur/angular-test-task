import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

export class AppModule { }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
