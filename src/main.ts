import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  Sentry.init({
    dsn: "https://165443f1f6654ddeb8cec14a7e9d512b@o83455.ingest.sentry.io/6005966",
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ["localhost"],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => console.log(`Bootstrap success`))
  .catch(err => console.error(err));