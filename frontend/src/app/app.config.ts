import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { angularIcon, cssIcon, gitIcon, htmlIcon, javascriptIcon, nestjsIcon, nodejsIcon, rxjsIcon, sqlIcon, typescriptIcon } from './shared/assets/icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icons = [
  { name: 'angular-custom', svg: angularIcon },
  { name: 'javascript-custom', svg: javascriptIcon },
  { name: 'typescript-custom', svg: typescriptIcon },
  { name: 'nestjs-custom', svg: nestjsIcon },
  { name: 'nodejs-custom', svg: nodejsIcon },
  { name: 'rxjs-custom', svg: rxjsIcon },
  { name: 'html-custom', svg: htmlIcon },
  { name: 'css-custom', svg: cssIcon },
  { name: 'sql-custom', svg: sqlIcon },
  { name: 'git-custom', svg: gitIcon }
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideCustomIcons()
  ],
};

export function provideCustomIcons() {
  return provideAppInitializer(() => {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    icons.forEach((icon) => {
      iconRegistry.addSvgIconLiteral(icon.name,
        sanitizer.bypassSecurityTrustHtml(icon.svg));
    });
  });
}
