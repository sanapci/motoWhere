import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { config } from './app/common/config';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
