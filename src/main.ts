import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var module: any;
const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);

const makeHot = () => {
  console.log('enable hot reload');
  module.hot.accept();
  module.hot.dispose(() => {
    const oldRootElem = document.querySelector('app');
    const newRootElem = document.createElement('app');
    oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
    oldRootElem!.parentNode!.removeChild(oldRootElem);
    modulePromise.then(appModule => appModule.destroy());
  });
}

if (environment.production) {
  enableProdMode();
} else {
  if (module.hot) makeHot()
}


